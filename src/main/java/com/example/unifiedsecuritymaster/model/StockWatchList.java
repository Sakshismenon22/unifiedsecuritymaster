package com.example.unifiedsecuritymaster.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "stock_watchlist")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class StockWatchList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String symbol;

    private String name;

    private String exchange;

    private String isin;

    private String gics;

    private String country;

    private String industry;

    private String sector;

    private LocalDateTime lastUpdatedAt;

}
