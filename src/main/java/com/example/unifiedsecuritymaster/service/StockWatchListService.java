package com.example.unifiedsecuritymaster.service;

import com.example.unifiedsecuritymaster.dto.request.AddStockDTO;
import com.example.unifiedsecuritymaster.model.StockWatchList;

import java.util.List;

public interface StockWatchListService {

    String addStock(AddStockDTO addStockDTO);

    String deleteStock(Integer id);


    List<StockWatchList> getAllStocks();

}
