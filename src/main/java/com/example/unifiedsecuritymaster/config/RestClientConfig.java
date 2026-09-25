//package com.example.unifiedsecuritymaster.config;
//
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.client.SimpleClientHttpRequestFactory;
//import org.springframework.web.client.RestClient;
//
//import java.net.CookieHandler;
//import java.net.CookieManager;
//import java.net.CookiePolicy;
//import java.time.Duration;
//
//@Slf4j
//@Configuration
//public class RestClientConfig {
//
//    @Bean
//    public RestClient nseRestClient(CsvProperties props) {
//
//        // NSE issues session cookies on the landing page and requires them on API calls
//        CookieManager cookieManager = new CookieManager();
//        cookieManager.setCookiePolicy(CookiePolicy.ACCEPT_ALL);
//        CookieHandler.setDefault(cookieManager);
//
//        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
//        factory.setConnectTimeout(Duration.ofMillis(props.getConnectTimeoutMs()));
//        factory.setReadTimeout(Duration.ofMillis(props.getReadTimeoutMs()));
//
//        RestClient client = RestClient.builder()
//                .requestFactory(factory)
//                .defaultHeader(HttpHeaders.USER_AGENT,
//                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
//                                + "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")
//                .defaultHeader(HttpHeaders.ACCEPT,
//                        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
//                .defaultHeader(HttpHeaders.ACCEPT_LANGUAGE, "en-US,en;q=0.9")
//                .defaultHeader(HttpHeaders.CONNECTION, "keep-alive")
//                .build();
//
//        warmSession(client, props.getBaseUrl());
//        return client;
//    }
//
//    /** Primes the cookie jar so subsequent API calls are not rejected. */
//    private void warmSession(RestClient client, String baseUrl) {
//        try {
//            client.get().uri(baseUrl).retrieve().toBodilessEntity();
//            log.info("NSE session warmed against {}", baseUrl);
//        } catch (Exception e) {
//            log.warn("Could not warm NSE session ({}). Downloads may fail.", e.getMessage());
//        }
//    }}

package com.example.unifiedsecuritymaster.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.client.JdkClientHttpRequestFactory;
import org.springframework.web.client.RestClient;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.net.CookieManager;
import java.net.CookiePolicy;
import java.net.http.HttpClient;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.time.Duration;

@Slf4j
@Configuration
public class RestClientConfig {

    @Bean
    public RestClient nseRestClient(CsvProperties props) throws Exception {

        HttpClient.Builder builder = HttpClient.newBuilder()
                .connectTimeout(Duration.ofMillis(props.getConnectTimeoutMs()))
                .followRedirects(HttpClient.Redirect.NORMAL)
                .cookieHandler(new CookieManager(null, CookiePolicy.ACCEPT_ALL));

        if (props.isInsecureSsl()) {
            log.warn("##################################################################");
            log.warn("#  TLS CERTIFICATE VALIDATION IS DISABLED                        #");
            log.warn("#  securitymaster.csv.insecure-ssl=true                          #");
            log.warn("#  LOCAL DEVELOPMENT ONLY - NEVER USE IN A SHARED ENVIRONMENT    #");
            log.warn("##################################################################");
            builder.sslContext(trustAllSslContext());
        }

        HttpClient httpClient = builder.build();

        JdkClientHttpRequestFactory factory = new JdkClientHttpRequestFactory(httpClient);
        factory.setReadTimeout(Duration.ofMillis(props.getReadTimeoutMs()));

        RestClient client = RestClient.builder()
                .requestFactory(factory)
                .defaultHeader(HttpHeaders.USER_AGENT,
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                                + "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")
                .defaultHeader(HttpHeaders.ACCEPT,
                        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
                .defaultHeader(HttpHeaders.ACCEPT_LANGUAGE, "en-US,en;q=0.9")
                .build();

        warmSession(client, props.getBaseUrl());
        return client;
    }


    private SSLContext trustAllSslContext() throws Exception {
        TrustManager[] trustAll = new TrustManager[]{
                new X509TrustManager() {
                    @Override public void checkClientTrusted(X509Certificate[] c, String a) { }
                    @Override public void checkServerTrusted(X509Certificate[] c, String a) { }
                    @Override public X509Certificate[] getAcceptedIssuers() { return new X509Certificate[0]; }
                }
        };
        SSLContext ctx = SSLContext.getInstance("TLS");
        ctx.init(null, trustAll, new SecureRandom());
        return ctx;
    }

    private void warmSession(RestClient client, String baseUrl) {
        try {
            client.get().uri(baseUrl).retrieve().toBodilessEntity();
            log.info("NSE session warmed against {}", baseUrl);
        } catch (Exception e) {
            log.warn("Session warm-up failed: {}", e.getMessage());
        }
    }
}