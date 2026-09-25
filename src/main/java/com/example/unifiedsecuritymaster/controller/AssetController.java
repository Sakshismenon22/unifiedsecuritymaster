package com.example.unifiedsecuritymaster.controller;

import com.example.unifiedsecuritymaster.model.Asset;
import com.example.unifiedsecuritymaster.service.AssetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assets")
@RequiredArgsConstructor
public class AssetController {

    private final AssetService assetService;

    @PostMapping("/add-asset")
    public ResponseEntity<String> addAsset(@RequestBody Asset asset){
        return new ResponseEntity<>(assetService.addAsset(asset), HttpStatus.OK);
    }

    @DeleteMapping("/delete-asset/{id}")
    public ResponseEntity<String> removeAsset(@PathVariable Integer id){
        return new ResponseEntity<>(assetService.removeAsset(id), HttpStatus.OK);
    }

    @GetMapping("/get-assets/{assetName}")
    public ResponseEntity<List<Asset>> searchAsset(@PathVariable String assetName){
        return new ResponseEntity<>(assetService.searchAsset(assetName), HttpStatus.OK);
    }
}
