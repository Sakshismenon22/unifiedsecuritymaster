package com.example.unifiedsecuritymaster.service;

import com.example.unifiedsecuritymaster.dto.request.AddBondDTO;
import com.example.unifiedsecuritymaster.model.Bond;

import java.util.List;

public interface BondService {

    public String addBond(AddBondDTO addBondDTO);

    public String deleteBond(Integer id);

    public List<Bond> getAllBonds();
}
