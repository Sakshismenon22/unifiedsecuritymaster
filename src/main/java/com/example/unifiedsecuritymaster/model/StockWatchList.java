package com.example.unifiedsecuritymaster.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "stock_watchlist")
public class StockWatchList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String symbol;

    private String name;

    private String exchange;

    private String isin;

    private String gics;

    private String url;

    private String country;

    private String industry;

    private String sector;

    private LocalDateTime lastUpdatedAt;
}
