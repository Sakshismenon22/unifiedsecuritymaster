package com.example.unifiedsecuritymaster.repository;

import com.example.unifiedsecuritymaster.model.SecurityMaster;
import com.example.unifiedsecuritymaster.model.enums.SecurityType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface SecurityMasterRepository extends JpaRepository<SecurityMaster, Long> {

    Optional<SecurityMaster> findBySymbolAndExchangeCode(String symbol, String exchangeCode);

    Optional<SecurityMaster> findByIsinAndExchangeCode(String isin, String exchangeCode);

    List<SecurityMaster> findByIsin(String isin);

    List<SecurityMaster> findByGicsSectorIgnoreCase(String sector);

    List<SecurityMaster> findByGicsSectorIgnoreCaseAndGicsIndustryIgnoreCase(
            String sector, String industry);

    Page<SecurityMaster> findByNameContainingIgnoreCase(String name, Pageable pageable);

    @Query(value = """
            SELECT
                sm.id,
                sm.name,
                sm.symbol,
                sm.isin,
                sm.gics_sector,
                sm.equity_category,
                a.id AS asset_id,
                a.asset_class,
                a.description,
                a.asset_subclass,
                a.risk,
                a.investment_horizon,
                a.sub_asset_description,
                a.status,
                COALESCE(sd.close_price, mf.nav, cs.spot_price, b.clean_price) AS current_price
            FROM security_master sm
            LEFT JOIN asset a ON a.id = sm.asset_id
            LEFT JOIN LATERAL (
                SELECT sd.close_price
                FROM stock_data sd
                WHERE sd.symbol = sm.symbol
                  AND sm.security_type IN ('EQUITY', 'ETF')
                ORDER BY sd.trade_date DESC, sd.id DESC
                LIMIT 1
            ) sd ON sm.security_type IN ('EQUITY', 'ETF')
            LEFT JOIN LATERAL (
                SELECT mf.nav
                FROM mutualfund_nav mf
                WHERE mf.isin = sm.isin
                  AND sm.security_type = 'MUTUAL_FUND'
                ORDER BY mf.nav_date DESC, mf.id DESC
                LIMIT 1
            ) mf ON sm.security_type = 'MUTUAL_FUND'
            LEFT JOIN LATERAL (
                SELECT cs.spot_price
                FROM commodity_spot_data cs
                WHERE cs.symbol = sm.symbol
                  AND sm.security_type = 'COMMODITY'
                ORDER BY cs.spot_date DESC, cs.id DESC
                LIMIT 1
            ) cs ON sm.security_type = 'COMMODITY'
            LEFT JOIN LATERAL (
                SELECT b.clean_price
                FROM bond b
                WHERE b.isin = sm.isin
                  AND sm.security_type = 'BOND'
                ORDER BY b.maturity_date DESC, b.id DESC
                LIMIT 1
            ) b ON sm.security_type = 'BOND'
            ORDER BY sm.name ASC
            """, nativeQuery = true)
    List<Object[]> findAllSecurityInfoWithLatestPrice();

    List<SecurityMaster> findBySecurityType(SecurityType type);

    @Query("SELECT s.securityType, COUNT(s) FROM SecurityMaster s GROUP BY s.securityType")
    List<Object[]> countByType();
}
