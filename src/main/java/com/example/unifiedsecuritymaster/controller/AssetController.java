package com.example.unifiedsecuritymaster.controller;

import com.example.unifiedsecuritymaster.model.Asset;
import com.example.unifiedsecuritymaster.response.Response;
import com.example.unifiedsecuritymaster.service.AssetService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/assets")
@RequiredArgsConstructor
public class AssetController {

    private final AssetService assetService;

    @PostMapping("/add-asset")
    public Response addAsset(@RequestBody Asset asset){
        return new Response(HttpStatus.OK.value(), true, null, assetService.addAsset(asset), LocalDateTime.now() );
    }

    @DeleteMapping("/delete-asset/{id}")
    public Response removeAsset(@PathVariable Integer id){
        return new Response(HttpStatus.OK.value(), true, null, assetService.removeAsset(id), LocalDateTime.now());
    }

    @GetMapping("/get-assets/{assetName}")
    public Response<List<Asset>> searchAsset(@PathVariable String assetName){
        return new Response<>(HttpStatus.OK.value(), true, assetService.searchAsset(assetName), "Retrieved", LocalDateTime.now());
    }
}
