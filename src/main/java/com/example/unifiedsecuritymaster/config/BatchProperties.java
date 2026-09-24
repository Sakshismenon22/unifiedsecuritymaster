package com.example.unifiedsecuritymaster.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
@Data
@Component
@ConfigurationProperties(prefix = "securitymaster.batch")
public class BatchProperties {

    /** Watchlist rows processed per transaction. Keep small - each item does HTTP I/O. */
    private int chunkSize = 5;

    /** JPA page size for the watchlist reader. */
    private int pageSize = 20;

    /** Max symbols allowed to fail before the step aborts. */
    private int skipLimit = 10;

    /** Retries per symbol on transient download failures. */
    private int retryLimit = 3;
}
