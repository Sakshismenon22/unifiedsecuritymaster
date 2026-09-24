package com.example.unifiedsecuritymaster.repository;

import com.example.unifiedsecuritymaster.model.StockWatchList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StockWatchListRepository extends JpaRepository<StockWatchList,Integer> {
    public Boolean existsBySymbol(String symbol);

    Optional<StockWatchList> findBySymbolAndExchange(String symbol, String exchange);

    boolean existsBySymbolAndExchange(String symbol, String exchange);
}
