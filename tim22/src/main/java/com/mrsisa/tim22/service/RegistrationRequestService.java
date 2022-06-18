package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.RegistrationRequestDTO;
import com.mrsisa.tim22.model.RegistrationRequest;
import com.mrsisa.tim22.repository.PromoRepository;
import com.mrsisa.tim22.repository.RegistrationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class RegistrationRequestService {
    @Autowired
    private RegistrationRequestRepository registrationRequestRepository;


    public ArrayList<RegistrationRequestDTO> getAllRegistrationRequests() {
        ArrayList<RegistrationRequestDTO> requrstDTOs = new ArrayList<>();
        ArrayList<RegistrationRequest> requests = (ArrayList<RegistrationRequest>) registrationRequestRepository.findAll();
        for (RegistrationRequest r: requests) {
           if(!r.getIsAnswered()) {
               requrstDTOs.add(new RegistrationRequestDTO(r));
           }
        }
        return requrstDTOs;
    }
}
