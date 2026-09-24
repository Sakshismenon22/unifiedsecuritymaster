package com.example.unifiedsecuritymaster.exception;

public class StockAlreadyExistInWatchListException extends RuntimeException{

    public StockAlreadyExistInWatchListException(){
        super("Stock is already present in the watchlist.");
    }

}
