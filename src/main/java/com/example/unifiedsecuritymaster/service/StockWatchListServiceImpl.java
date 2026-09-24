package com.example.unifiedsecuritymaster.service;

import com.example.unifiedsecuritymaster.dto.request.AddStockDTO;
import com.example.unifiedsecuritymaster.exception.StockNotFound;
import com.example.unifiedsecuritymaster.model.StockWatchList;
import com.example.unifiedsecuritymaster.repository.StockWatchListRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StockWatchListServiceImpl implements StockWatchListService {

    private final StockWatchListRepository stockWatchListRepository;

    @Override
    public String addStock(AddStockDTO addStockDTO) {
        if(!stockWatchListRepository.existsBySymbol(addStockDTO.getSymbol())){
            StockWatchList stockWatchList = new StockWatchList(null,addStockDTO.getSymbol(),addStockDTO.getName(),addStockDTO.getExchange(),addStockDTO.getIsin(),addStockDTO.getGics(),addStockDTO.getCountry(),addStockDTO.getIndustry(),addStockDTO.getSector(),null);
            stockWatchListRepository.save(stockWatchList);
            return "Stock is added to the watchlist.";
        }else{
            throw new StringIndexOutOfBoundsException();
        }
    }

    @Override
    public String deleteStock(Integer id) {
        if(stockWatchListRepository.existsById(id)){
            stockWatchListRepository.deleteById(id);
            return "Stock is removed from the watchlist.";
        }else{
            throw new StockNotFound();
        }
    }
}
