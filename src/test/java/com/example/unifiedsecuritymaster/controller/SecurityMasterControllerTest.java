package com.example.unifiedsecuritymaster.controller;

import com.example.unifiedsecuritymaster.dto.request.AddSecurityMasterDTO;
import com.example.unifiedsecuritymaster.dto.response.SecuritiesInfoDTO;
import com.example.unifiedsecuritymaster.dto.response.SecurityInfoDTO;
import com.example.unifiedsecuritymaster.dto.response.SecurityPriceDTO;
import com.example.unifiedsecuritymaster.model.SecurityMaster;
import com.example.unifiedsecuritymaster.response.Response;
import com.example.unifiedsecuritymaster.service.SecurityMasterService;
import org.junit.jupiter.api.Test;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

class SecurityMasterControllerTest {

    @Test
    void searchSecurityByNameShouldReturnPagedResults() {
        SecurityMaster securityMaster = new SecurityMaster();
        securityMaster.setId(1L);
        securityMaster.setName("Infosys Limited");
        securityMaster.setSymbol("INFY");

        SecurityMasterService securityMasterService = new StubSecurityMasterService(
                new PageImpl<>(List.of(securityMaster), PageRequest.of(0, 10), 1),
                null
        );

        SecurityMasterController controller = new SecurityMasterController(securityMasterService);
        ResponseEntity<?> response = controller.searchSecurityByName("info", 0, 10);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        Response<?> body = (Response<?>) response.getBody();
        assertNotNull(body);
        assertTrue(body.getSuccess());
        Page<?> page = (Page<?>) body.getData();
        assertEquals("Infosys Limited", ((SecurityMaster) page.getContent().get(0)).getName());
    }

    @Test
    void getAllSecurityPageShouldReturnPagedResults() {
        SecurityMaster securityMaster = new SecurityMaster();
        securityMaster.setId(2L);
        securityMaster.setName("Tata Consultancy Services");
        securityMaster.setSymbol("TCS");

        SecurityMasterService securityMasterService = new StubSecurityMasterService(
                new PageImpl<>(List.of(securityMaster), PageRequest.of(0, 5), 1),
                new PageImpl<>(List.of(securityMaster), PageRequest.of(0, 5), 1)
        );

        SecurityMasterController controller = new SecurityMasterController(securityMasterService);
        ResponseEntity<?> response = controller.getAllSecurityPage(0, 5);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        Response<?> body = (Response<?>) response.getBody();
        assertNotNull(body);
        assertTrue(body.getSuccess());
        Page<?> page = (Page<?>) body.getData();
        assertEquals("TCS", ((SecurityMaster) page.getContent().get(0)).getSymbol());
    }

    private static class StubSecurityMasterService implements SecurityMasterService {
        private final Page<SecurityMaster> searchPage;
        private final Page<SecurityMaster> allPage;

        private StubSecurityMasterService(Page<SecurityMaster> searchPage, Page<SecurityMaster> allPage) {
            this.searchPage = searchPage;
            this.allPage = allPage;
        }

        @Override
        public String addSecurity(AddSecurityMasterDTO addSecurityMasterDTO) {
            return "";
        }

        @Override
        public String updateSecurity(SecurityMaster securityMaster) {
            return "";
        }

        @Override
        public String deleteSecurity(Long id) {
            return "";
        }

        @Override
        public List<SecurityMaster> getAllSecurity() {
            return allPage == null ? List.of() : allPage.getContent();
        }

        @Override
        public Page<SecurityMaster> getAllSecurityPage(int page, int size) {
            return allPage == null ? Page.empty() : allPage;
        }

        @Override
        public Page<SecurityMaster> searchSecurityByName(String name, int page, int size) {
            return searchPage == null ? Page.empty() : searchPage;
        }

        @Override
        public SecurityPriceDTO getSecurityLatestPrice(Long securityId) {
            return null;
        }

        @Override
        public SecuritiesInfoDTO getAllSecurityInfo() {
            return null;
        }

        @Override
        public SecuritiesInfoDTO getAllSecurityInfoWithLatestPrice() {
            return allPage == null ? new SecuritiesInfoDTO(List.of()) : new SecuritiesInfoDTO(allPage.getContent().stream()
                    .map(security -> {
                        SecurityInfoDTO dto = new SecurityInfoDTO();
                        dto.setId(security.getId());
                        dto.setName(security.getName());
                        dto.setSymbol(security.getSymbol());
                        dto.setIsin(security.getIsin());
                        return dto;
                    })
                    .toList());
        }
    }
}
