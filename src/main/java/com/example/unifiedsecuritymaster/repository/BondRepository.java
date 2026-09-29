package com.example.unifiedsecuritymaster.repository;

import com.example.unifiedsecuritymaster.model.Bond;
import com.example.unifiedsecuritymaster.model.MutualFundNav;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BondRepository extends JpaRepository<Bond, Integer> {

    List<Bond> findByExchange(String exchange);

    public Bond findByIsin(String isin);

    boolean existsByIsin(String isin);
}
