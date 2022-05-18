package com.mrsisa.tim22.controller;


import com.mrsisa.tim22.dto.ListingDTO;
import com.mrsisa.tim22.dto.ReservationDTO;
import com.mrsisa.tim22.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @RequestMapping(value = "/api/reservation/getAllReservations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<ReservationDTO>> getAllReservations(){

        return new ResponseEntity<ArrayList<ReservationDTO>>(reservationService.getAllReservations(), HttpStatus.OK);
    }

    @RequestMapping(value = "/api/reservation/getClientReservations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<ReservationDTO>> getClientReservations(@RequestParam String email){


        return new ResponseEntity<ArrayList<ReservationDTO>>(reservationService.getClientReservations(email), HttpStatus.OK);
    }
}
