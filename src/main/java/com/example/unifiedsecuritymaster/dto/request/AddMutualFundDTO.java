package com.example.unifiedsecuritymaster.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddMutualFundDTO {

    private String isin;

    private String schemeName;

    private Integer assetId;
}
