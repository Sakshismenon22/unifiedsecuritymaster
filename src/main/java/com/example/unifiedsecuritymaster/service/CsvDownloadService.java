package com.example.unifiedsecuritymaster.service;

import com.example.unifiedsecuritymaster.config.CsvProperties;
import com.example.unifiedsecuritymaster.exception.CsvDownloadException;
import com.example.unifiedsecuritymaster.model.StockWatchList;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.net.URI;
@Slf4j
@Service
@RequiredArgsConstructor
public class CsvDownloadService {

    private static final DateTimeFormatter URL_DATE = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    private final CsvProperties props;
    private final RestClient nseRestClient;

    /** Builds the vendor CSV URL from the watchlist row. */
    public String buildUrl(StockWatchList wl, LocalDate from, LocalDate to) {
        return props.getUrlTemplate()
                .replace("{symbol}", wl.getSymbol())
                .replace("{series}", props.getDefaultSeries())
                .replace("{from}",   from.format(URL_DATE))
                .replace("{to}",     to.format(URL_DATE));
    }

    /** Downloads the CSV to local disk and returns its path. */
    public Path download(StockWatchList wl, LocalDate from, LocalDate to) {

        String url = buildUrl(wl, from, to);
        log.debug("Fetching [{}] -> {}", wl.getSymbol(), url);

        try {
            Path dir = Paths.get(props.getStorageDir(), to.toString());
            Files.createDirectories(dir);

            Path target = dir.resolve(wl.getSymbol() + "_" + wl.getExchange() + ".csv");

            nseRestClient.get()
                    .uri(URI.create(url))
                    .header(HttpHeaders.REFERER,
                            props.getBaseUrl() + "/get-quotes/equity?symbol=" + wl.getSymbol())
                    .accept(MediaType.ALL)
                    .exchange((request, response) -> {
                        if (response.getStatusCode().isError()) {
                            throw new CsvDownloadException(wl.getSymbol(),
                                    "HTTP " + response.getStatusCode().value());
                        }
                        try (InputStream in = response.getBody()) {
                            Files.copy(in, target, StandardCopyOption.REPLACE_EXISTING);
                        }
                        return null;
                    });

            long bytes = Files.size(target);
            if (bytes == 0L) {
                throw new CsvDownloadException(wl.getSymbol(), "Empty file received");
            }

            log.info("Saved CSV [{}] {} bytes -> {}", wl.getSymbol(), bytes, target);
            return target;

        } catch (CsvDownloadException e) {
            throw e;
        } catch (Exception e) {
            throw new CsvDownloadException(wl.getSymbol(), e.getMessage(), e);
        }
    }

    public void deleteQuietly(Path file) {
        if (file == null || props.isKeepFiles()) return;
        try {
            Files.deleteIfExists(file);
        } catch (Exception e) {
            log.warn("Could not delete {}: {}", file, e.getMessage());
        }
    }
}

