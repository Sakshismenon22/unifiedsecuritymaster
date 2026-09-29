package com.example.unifiedsecuritymaster.controller;

import com.example.unifiedsecuritymaster.dto.request.AddMutualFundDTO;
import com.example.unifiedsecuritymaster.model.MutualFundWatchList;
import com.example.unifiedsecuritymaster.response.Response;
import com.example.unifiedsecuritymaster.service.MutualFundWatchListService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/mutualfunds-watchlist")
public class MutualFundWatchListController {

    private final MutualFundWatchListService mutualFundWatchListService;

    @PostMapping("/add-mutual-fund")
    public Response<String> addMutualFund(@RequestBody AddMutualFundDTO addMutualFundDTO){
        return new Response<>(HttpStatus.OK.value(), true, null, mutualFundWatchListService.addMutualFund(addMutualFundDTO), LocalDateTime.now() );
    }

    @DeleteMapping("/delete-mutual-fund/{id}")
    public Response<String> removeMutualFund(@PathVariable Integer id){
        return new Response<>(HttpStatus.OK.value(), true, null, mutualFundWatchListService.removeMutualFund(id), LocalDateTime.now());
    }

    @GetMapping("/all-mutual-funds")
    public Response<List<MutualFundWatchList>> getAllMutualFunds(){
        return new Response<>(HttpStatus.OK.value(), true, mutualFundWatchListService.getAllMutualFunds(), "All mutual funds retrieved", LocalDateTime.now());
    }


}
