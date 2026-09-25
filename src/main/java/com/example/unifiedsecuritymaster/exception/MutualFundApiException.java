package com.example.unifiedsecuritymaster.exception;

public class MutualFundApiException extends RuntimeException {

    private final String isin;

    public MutualFundApiException(String isin, String message) {
        super("MF NAV fetch failed for [" + isin + "]: " + message);
        this.isin = isin;
    }

    public MutualFundApiException(String isin, String message, Throwable cause) {
        super("MF NAV fetch failed for [" + isin + "]: " + message, cause);
        this.isin = isin;
    }

    public String getIsin() {
        return isin;
    }
}
