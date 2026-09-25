package com.example.unifiedsecuritymaster.service;


import com.example.unifiedsecuritymaster.dto.request.AddMutualFundDTO;

public interface MutualFundWatchListService {

    public String addMutualFund(AddMutualFundDTO addMutualFundDTO);

    public String removeMutualFund(Integer id);

}
