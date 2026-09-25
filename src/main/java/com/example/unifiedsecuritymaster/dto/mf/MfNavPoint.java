package com.example.unifiedsecuritymaster.dto.mf;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MfNavPoint {
    private LocalDate date;   // "2020-01-01" - ISO, parses natively
    private BigDecimal nav;    // 152.17
}
