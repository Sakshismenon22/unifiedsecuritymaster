package com.example.unifiedsecuritymaster.service;


import com.example.unifiedsecuritymaster.dto.request.AddMutualFundDTO;
import com.example.unifiedsecuritymaster.model.MutualFundWatchList;

import java.util.List;

public interface MutualFundWatchListService {

    public String addMutualFund(AddMutualFundDTO addMutualFundDTO);

    public String removeMutualFund(Integer id);

    public List<MutualFundWatchList> getAllMutualFunds();

}
