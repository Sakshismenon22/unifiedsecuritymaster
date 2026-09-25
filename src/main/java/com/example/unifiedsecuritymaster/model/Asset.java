package com.example.unifiedsecuritymaster.model;

import com.example.unifiedsecuritymaster.model.enums.InvestmentHorizon;
import com.example.unifiedsecuritymaster.model.enums.Risk;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "asset")
public class Asset {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String assetClass;

    private String description;

    private String assetSubclass;

    @Enumerated(EnumType.STRING)
    private Risk risk;

    @Enumerated(EnumType.STRING)
    private InvestmentHorizon investmentHorizon;

    private String subAssetDescription;

    private Boolean status;

}
