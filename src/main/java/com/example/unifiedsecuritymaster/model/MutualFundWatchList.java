package com.example.unifiedsecuritymaster.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "mutualfund_watchlist")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class MutualFundWatchList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String isin;

    private String schemeName;

    @ManyToOne
    private Asset asset;

    private Boolean status;

}
