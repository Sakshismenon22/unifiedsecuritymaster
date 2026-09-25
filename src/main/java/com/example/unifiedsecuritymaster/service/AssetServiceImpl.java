package com.example.unifiedsecuritymaster.service;

import com.example.unifiedsecuritymaster.exception.AssetNotFoundException;
import com.example.unifiedsecuritymaster.model.Asset;
import com.example.unifiedsecuritymaster.repository.AssetRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AssetServiceImpl implements AssetService{

    private final AssetRepository assetRepository;


    @Override
    public String addAsset(Asset asset) {
        assetRepository.save(asset);
        return "Asset added successfully.";
    }

    @Override
    public String removeAsset(Integer id) {
        if(assetRepository.existsById(id)){
            Asset asset = assetRepository.findById(id).get();
            asset.setStatus(false);
            assetRepository.save(asset);
            return "Asset Removed successfully";
        }else{
            throw new AssetNotFoundException();
        }

    }

    @Override
    public List<Asset> searchAsset(String assetName) {
        return assetRepository.findByAssetClass(assetName);
    }
}
