package com.example.unifiedsecuritymaster.repository;

import com.example.unifiedsecuritymaster.model.StockWatchList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockWatchListRepository extends JpaRepository<StockWatchList,Integer> {
}
