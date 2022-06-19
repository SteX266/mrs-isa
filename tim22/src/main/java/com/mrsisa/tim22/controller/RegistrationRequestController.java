package com.mrsisa.tim22.controller;


import com.mrsisa.tim22.dto.RegistrationRequestDTO;
import com.mrsisa.tim22.dto.ReservationRequestDTO;
import com.mrsisa.tim22.service.RegistrationRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping(value = "/registrationRequest", produces = MediaType.APPLICATION_JSON_VALUE)
public class RegistrationRequestController {


        @Autowired
        private RegistrationRequestService registrationRequestService;

        @RequestMapping(value = "/getAllRegistrationRequests", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
        public ResponseEntity<ArrayList<RegistrationRequestDTO>> getAllRegistrationRequests(){
            return new ResponseEntity<ArrayList<RegistrationRequestDTO>>(registrationRequestService.getAllRegistrationRequests(), HttpStatus.OK);
        }
     @PostMapping(value = "/acceptRegistrationRequest")
    public boolean makeReservation(@RequestBody RegistrationRequestDTO dto){
         return registrationRequestService.acceptRegistrationRequest(dto);
    }
    @PostMapping(value = "/declineRegistrationRequest")
    public boolean declineRegistrationRequest(@RequestBody RegistrationRequestDTO dto){
        return registrationRequestService.declineRegistrationRequest(dto);
    }
}

