package com.example.unifiedsecuritymaster.repository;


import com.example.unifiedsecuritymaster.model.StockData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface StockDataRepository extends JpaRepository<StockData, Long> {

    List<StockData> findBySymbolOrderByTradeDateDesc(String symbol);

    @Query("SELECT MAX(s.tradeDate) FROM StockData s WHERE s.symbol = :symbol")
    Optional<LocalDate> findLatestTradeDate(@Param("symbol") String symbol);

    @Query("SELECT s.symbol, COUNT(s), MIN(s.tradeDate), MAX(s.tradeDate) " +
            "FROM StockData s GROUP BY s.symbol ORDER BY s.symbol")
    List<Object[]> summariseBySymbol();
}
