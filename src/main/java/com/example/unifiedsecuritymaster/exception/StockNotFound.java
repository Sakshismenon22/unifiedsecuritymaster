package com.example.unifiedsecuritymaster.exception;

public class StockNotFound extends RuntimeException{

    public StockNotFound(){
        super("Stock is not found.");
    }

}
