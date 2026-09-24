package com.example.unifiedsecuritymaster.service;

import com.example.unifiedsecuritymaster.dto.request.AddStockDTO;
import com.example.unifiedsecuritymaster.repository.StockWatchListRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StockWatchListServiceImpl implements StockWatchListService {

    private final StockWatchListRepository stockWatchListRepository;

    @Override
    public String addStock(AddStockDTO addStockDTO) {
        return "";
    }

    @Override
    public String deleteStock(Integer id) {
        return "";
    }
}
