package com.example.unifiedsecuritymaster.service;

import com.example.unifiedsecuritymaster.dto.request.AddStockDTO;

public interface StockWatchListService {

    String addStock(AddStockDTO addStockDTO);

    String deleteStock(Integer id);

}
