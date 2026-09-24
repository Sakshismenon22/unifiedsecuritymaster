package com.example.unifiedsecuritymaster.controller;


import com.example.unifiedsecuritymaster.dto.request.AddStockDTO;
import com.example.unifiedsecuritymaster.service.StockWatchListServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stock-watchlist")
@RequiredArgsConstructor
public class StockWatchListController {

    private final StockWatchListServiceImpl stockWatchListService;

    @PostMapping("/add-stock")
    public String addStock(@RequestBody AddStockDTO addStockDTO){
        return stockWatchListService.addStock(addStockDTO);
    }

    @DeleteMapping("/delete-stock/{id}")
    public String deleteStock(@PathVariable Integer id){
        return  stockWatchListService.deleteStock(id);
    }

}
