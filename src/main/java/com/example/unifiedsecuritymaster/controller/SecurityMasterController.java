package com.example.unifiedsecuritymaster.controller;

import com.example.unifiedsecuritymaster.dto.request.AddSecurityMasterDTO;
import com.example.unifiedsecuritymaster.dto.request.AddStockDTO;
import com.example.unifiedsecuritymaster.dto.response.SecuritiesInfoDTO;
import com.example.unifiedsecuritymaster.dto.response.SecurityPriceDTO;
import com.example.unifiedsecuritymaster.model.SecurityMaster;
import com.example.unifiedsecuritymaster.response.Response;
import com.example.unifiedsecuritymaster.service.SecurityMasterService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/security")
@RequiredArgsConstructor
public class SecurityMasterController {

    private final SecurityMasterService securityMasterService;

    @PostMapping("/add-security")
    public ResponseEntity<?> addSecurity(@RequestBody AddSecurityMasterDTO addSecurityMasterDTO){
        return new ResponseEntity<>(new Response<String>(HttpStatus.OK.value(),true,"",securityMasterService.addSecurity(addSecurityMasterDTO), LocalDateTime.now()), HttpStatus.OK);
    }

    @DeleteMapping("/delete-security/{id}")
    public ResponseEntity<?> deleteSecurity(@PathVariable Long id){
        return  new ResponseEntity<>(new Response<String>(HttpStatus.OK.value(),true,"",securityMasterService.deleteSecurity(id), LocalDateTime.now()), HttpStatus.OK);
    }

    @PutMapping("/update-security")
    public ResponseEntity<?> updateSecurity(@RequestBody SecurityMaster securityMaster){
        return  new ResponseEntity<>(new Response<String>(HttpStatus.OK.value(),true,"", securityMasterService.updateSecurity(securityMaster), LocalDateTime.now()), HttpStatus.OK);
    }

    @GetMapping("/get-all-security")
    public ResponseEntity<?> getAllSecurity(){
        return  new ResponseEntity<>(new Response<List<SecurityMaster>>(HttpStatus.OK.value(),true,securityMasterService.getAllSecurity(),"All securities retrieved.", LocalDateTime.now()), HttpStatus.OK);
    }

    @GetMapping("/get-all-security-page")
    public ResponseEntity<?> getAllSecurityPage(@RequestParam(defaultValue = "0") int page,
                                              @RequestParam(defaultValue = "10") int size) {
        return new ResponseEntity<>(
                new Response<Page<SecurityMaster>>(HttpStatus.OK.value(), true,
                        securityMasterService.getAllSecurityPage(page, size),
                        "All securities retrieved by page.", LocalDateTime.now()),
                HttpStatus.OK);
    }

    @GetMapping("/search-by-name")
    public ResponseEntity<?> searchSecurityByName(@RequestParam String name,
                                                @RequestParam(defaultValue = "0") int page,
                                                @RequestParam(defaultValue = "10") int size) {
        return new ResponseEntity<>(
                new Response<Page<SecurityMaster>>(HttpStatus.OK.value(), true,
                        securityMasterService.searchSecurityByName(name, page, size),
                        "Securities matching the name retrieved.", LocalDateTime.now()),
                HttpStatus.OK);
    }

    @GetMapping("/get-security-price/{securityId}")
    public ResponseEntity<?> getSecurityPrice(@PathVariable Long securityId){
        return  new ResponseEntity<>(new Response<SecurityPriceDTO>(HttpStatus.OK.value(),true,securityMasterService.getSecurityLatestPrice(securityId),"Security Price retrieved.", LocalDateTime.now()), HttpStatus.OK);
    }

    @GetMapping("/get-all-security-info")
    public ResponseEntity<?> getAllSecurityInfo(){
        return new ResponseEntity<>(new Response<SecuritiesInfoDTO>(HttpStatus.OK.value(), true, securityMasterService.getAllSecurityInfo(), "All securities info retrieved.",LocalDateTime.now()),HttpStatus.OK);
    }

    @GetMapping("/get-all-security-info-with-current-price")
    public ResponseEntity<?> getAllSecurityInfoWithCurrentPrice(){
        return new ResponseEntity<>(new Response<SecuritiesInfoDTO>(HttpStatus.OK.value(), true,
                securityMasterService.getAllSecurityInfoWithLatestPrice(),
                "All securities info with current price retrieved.", LocalDateTime.now()), HttpStatus.OK);
    }

}
