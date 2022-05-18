package com.mrsisa.tim22.controller;


import com.mrsisa.tim22.dto.ListingDTO;
import com.mrsisa.tim22.dto.ReservationDTO;
import com.mrsisa.tim22.model.Reservation;
import com.mrsisa.tim22.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*")
@RequestMapping(value = "/reservation", produces = MediaType.APPLICATION_JSON_VALUE)
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @RequestMapping(value = "/getAllReservations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<ReservationDTO>> getAllReservations(){
        return new ResponseEntity<ArrayList<ReservationDTO>>(reservationService.getAllReservations(), HttpStatus.OK);
    }

    @RequestMapping(value = "/getClientReservations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<ReservationDTO>> getClientReservations(@RequestParam String email){
        return new ResponseEntity<ArrayList<ReservationDTO>>(reservationService.getClientReservations(email), HttpStatus.OK);
    }
    @RequestMapping(value = "/cancelReservation", method=RequestMethod.GET)
    public void cancelReservation(@RequestParam int entityId){
        reservationService.cancelReservation(entityId);
    }

    @PostMapping(value = "/approveReservation")
    public void approveReservation(@RequestParam int entityId){
        reservationService.approveReservation(entityId);
    }
}
