package com.example.unifiedsecuritymaster.service;

import com.example.unifiedsecuritymaster.model.Asset;

import java.util.List;

public interface AssetService {

    public String addAsset(Asset asset);

    public String removeAsset(Integer id);

    public List<Asset> searchAsset(String assetName);

}
