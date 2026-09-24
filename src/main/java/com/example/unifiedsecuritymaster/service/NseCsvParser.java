package com.example.unifiedsecuritymaster.service;

import com.example.unifiedsecuritymaster.dto.nse.NseEquityCsvRow;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.infrastructure.item.ExecutionContext;
import org.springframework.batch.infrastructure.item.file.FlatFileItemReader;
import org.springframework.batch.infrastructure.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.infrastructure.item.file.transform.DelimitedLineTokenizer;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;
import org.springframework.batch.infrastructure.item.file.mapping.DefaultLineMapper;
import org.springframework.batch.infrastructure.item.file.mapping.BeanWrapperFieldSetMapper;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class NseCsvParser {

    /** Parses a downloaded NSE CSV into raw DTO rows. */
    public List<NseEquityCsvRow> parse(Path file) {

        FlatFileItemReader<NseEquityCsvRow> reader = buildReader(file);

        List<NseEquityCsvRow> rows = new ArrayList<>();
        reader.open(new ExecutionContext());
        try {
            NseEquityCsvRow row;
            while ((row = reader.read()) != null) {
                if (row.getSymbol() != null && !row.getSymbol().isBlank()) {
                    rows.add(row);
                }
            }
        } catch (Exception e) {
            throw new IllegalStateException("Failed to parse CSV: " + file, e);
        } finally {
            reader.close();
        }

        log.debug("Parsed {} rows from {}", rows.size(), file.getFileName());
        return rows;
    }

    private FlatFileItemReader<NseEquityCsvRow> buildReader(Path file) {

        DelimitedLineTokenizer tokenizer = new DelimitedLineTokenizer();
        tokenizer.setDelimiter(",");
        tokenizer.setQuoteCharacter('"');
        tokenizer.setStrict(false);                         // tolerate blank/footer lines
        tokenizer.setNames(NseEquityCsvRow.COLUMN_NAMES);

        BeanWrapperFieldSetMapper<NseEquityCsvRow> fieldSetMapper = new BeanWrapperFieldSetMapper<>();
        fieldSetMapper.setTargetType(NseEquityCsvRow.class);

        DefaultLineMapper<NseEquityCsvRow> lineMapper = new DefaultLineMapper<>();
        lineMapper.setLineTokenizer(tokenizer);
        lineMapper.setFieldSetMapper(fieldSetMapper);

        return new FlatFileItemReaderBuilder<NseEquityCsvRow>()
                .name("nseCsvParser")
                .resource(new FileSystemResource(file))
                .encoding(StandardCharsets.UTF_8.name())    // required for the header
                .linesToSkip(1)                             // discard padded header row
                .lineMapper(lineMapper)
                .strict(true)
                .build();
    }
}
