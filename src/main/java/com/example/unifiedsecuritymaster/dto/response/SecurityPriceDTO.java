package com.example.unifiedsecuritymaster.dto.response;

import com.example.unifiedsecuritymaster.model.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SecurityPriceDTO {

    private SecurityMaster securityMaster;
    private Bond bond;
    private StockData stockData;
    private MutualFundNav mutualFundNav;
    private CommoditySpotData commoditySpotData;


}
