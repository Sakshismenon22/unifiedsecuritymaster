package com.example.unifiedsecuritymaster.controller;


import com.example.unifiedsecuritymaster.dto.request.AddStockDTO;
import com.example.unifiedsecuritymaster.service.StockWatchListServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stock-watchlist")
@RequiredArgsConstructor
public class StockWatchListController {

    private final StockWatchListServiceImpl stockWatchListService;

    @PostMapping("/add-stock")
    public ResponseEntity<String> addStock(@RequestBody AddStockDTO addStockDTO){
        return new ResponseEntity<>(stockWatchListService.addStock(addStockDTO), HttpStatus.OK);
    }

    @DeleteMapping("/delete-stock/{id}")
    public ResponseEntity<String> deleteStock(@PathVariable Integer id){
        return  new ResponseEntity<>(stockWatchListService.deleteStock(id), HttpStatus.OK);
    }

}
