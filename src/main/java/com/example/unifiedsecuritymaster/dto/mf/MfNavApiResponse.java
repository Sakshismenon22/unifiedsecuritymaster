package com.example.unifiedsecuritymaster.dto.mf;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import tools.jackson.databind.PropertyNamingStrategies;
import tools.jackson.databind.annotation.JsonNaming;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class MfNavApiResponse {

    private Long             schemeCode;
    private String           schemeName;
    private String           isin;
    private String           isin2;
    private LocalDate firstAvailableDate;
    private LocalDate        latestAvailableDate;
    private Integer          count;
    private List<MfNavPoint> data;
}
