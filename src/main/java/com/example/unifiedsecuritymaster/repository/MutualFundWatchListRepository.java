package com.example.unifiedsecuritymaster.repository;

import com.example.unifiedsecuritymaster.model.MutualFundWatchList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MutualFundWatchListRepository extends JpaRepository<MutualFundWatchList, Integer> {
    Optional<MutualFundWatchList> findByIsin(String isin);

    boolean existsByIsin(String isin);
}
