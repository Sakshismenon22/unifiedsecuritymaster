package com.example.unifiedsecuritymaster.exception;

public class MutualFundWatchListNotFoundException extends RuntimeException{

    public MutualFundWatchListNotFoundException(){
        super("MutualFund Watchlist not found.");
    }

}
