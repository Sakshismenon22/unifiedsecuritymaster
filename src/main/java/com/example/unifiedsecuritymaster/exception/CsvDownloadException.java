package com.example.unifiedsecuritymaster.exception;

public class CsvDownloadException extends RuntimeException {

    private final String symbol;

    public CsvDownloadException(String symbol, String message) {
        super("CSV download failed for [" + symbol + "]: " + message);
        this.symbol = symbol;
    }

    public CsvDownloadException(String symbol, String message, Throwable cause) {
        super("CSV download failed for [" + symbol + "]: " + message, cause);
        this.symbol = symbol;
    }

    public String getSymbol() {
        return symbol;
    }
}
