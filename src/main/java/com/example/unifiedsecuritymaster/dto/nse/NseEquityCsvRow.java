package com.example.unifiedsecuritymaster.dto.nse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NseEquityCsvRow {
    private String symbol;
    private String series;
    private String tradeDate;
    private String prevClose;
    private String openPrice;
    private String highPrice;
    private String lowPrice;
    private String lastPrice;
    private String closePrice;
    private String averagePrice;
    private String totalTradedQuantity;
    private String turnover;
    private String noOfTrades;
    private String deliverableQty;
    private String deliveryPercentage;
}
