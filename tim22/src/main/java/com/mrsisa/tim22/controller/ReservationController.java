package com.mrsisa.tim22.controller;


import com.mrsisa.tim22.dto.ListingDTO;
import com.mrsisa.tim22.dto.ReservationDTO;
import com.mrsisa.tim22.dto.ReservationRequestDTO;
import com.mrsisa.tim22.model.Reservation;
import com.mrsisa.tim22.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*")
@RequestMapping(value = "/reservation", produces = MediaType.APPLICATION_JSON_VALUE)
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @RequestMapping(value = "/getClientReservations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<ReservationDTO>> getClientReservations(@RequestParam String email){
        return new ResponseEntity<ArrayList<ReservationDTO>>(reservationService.getClientReservations(email), HttpStatus.OK);
    }
    @RequestMapping(value = "/getEntityReservations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<ReservationDTO>> getEntityReservations(@RequestParam int id){
        return new ResponseEntity<ArrayList<ReservationDTO>>(reservationService.getEntityReservations(id), HttpStatus.OK);
    }
    @RequestMapping(value = "/getOwnerReservations", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<ReservationDTO>> getOwnerReservations(@RequestParam String email){
        return new ResponseEntity<ArrayList<ReservationDTO>>(reservationService.getOwnerReservations(email), HttpStatus.OK);
    }
    @RequestMapping(value = "/cancelReservation", method=RequestMethod.GET)
    public ResponseEntity<String>cancelReservation(@RequestParam int entityId){



        if (reservationService.cancelReservation(entityId)){
            return new ResponseEntity<>("OK", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Too late to cancel.", HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value = "/approveReservation", method=RequestMethod.GET)
    public void approveReservation(@RequestParam int entityId){
        reservationService.approveReservation(entityId);
    }

    @RequestMapping(value = "/createPromoReservation", method=RequestMethod.GET)
    public ResponseEntity<String> createPromoReservation(@RequestParam int promoId, @RequestParam String username){

        if(reservationService.createPromoReservation(promoId, username)){
            return new ResponseEntity<>("OK", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Can't make reservation", HttpStatus.FORBIDDEN);
        }
    }

    @PostMapping(value = "/makeReservation")
    public ResponseEntity<String> makeReservation(@RequestBody ReservationRequestDTO reservationRequest){
        if(reservationService.makeReservation(reservationRequest)){
            return new ResponseEntity<>("OK", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Can't make reservation", HttpStatus.FORBIDDEN);
        }
    }

}
