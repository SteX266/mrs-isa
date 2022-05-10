package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.AdventureDTO;
import com.mrsisa.tim22.dto.ListingDTO;
import com.mrsisa.tim22.dto.SystemEntityDTO;
import com.mrsisa.tim22.dto.VesselDTO;
import com.mrsisa.tim22.service.SystemEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SystemEntityController {

    @Autowired
    private SystemEntityService systemEntityService;

    @RequestMapping(value = "/api/entity/getAllEntities", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<SystemEntityDTO>> getAllEntitites(){

        return new ResponseEntity<ArrayList<SystemEntityDTO>>(systemEntityService.getEntities(), HttpStatus.OK);
    }

    @RequestMapping(value = "/api/entity/getAllAdventures", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<AdventureDTO>> getAllAdventures(){
        return new ResponseEntity<ArrayList<AdventureDTO>>(systemEntityService.getAllAdventures(), HttpStatus.OK);
    }

    @RequestMapping(value = "/api/entity/getAllVessels", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<VesselDTO>> getAllVessels(){

        return new ResponseEntity<ArrayList<VesselDTO>>(systemEntityService.getAllVessels(), HttpStatus.OK);
    }
    @RequestMapping(value = "/api/entity/getAllListings", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<ListingDTO>> getAllListings(){

        return new ResponseEntity<ArrayList<ListingDTO>>(systemEntityService.getAllListings(), HttpStatus.OK);
    }



}
