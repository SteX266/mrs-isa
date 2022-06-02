package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.*;
import com.mrsisa.tim22.service.SystemEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/entity", produces = MediaType.APPLICATION_JSON_VALUE)
public class SystemEntityController {

    @Autowired
    private SystemEntityService systemEntityService;

    @RequestMapping(value = "/getAllEntities", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<SystemEntityDTO>> getAllEntitites(){

        return new ResponseEntity<ArrayList<SystemEntityDTO>>(systemEntityService.getEntities(1,3), HttpStatus.OK);
    }

    @RequestMapping(value = "/getAllAdventures", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<AdventureDTO>> getAllAdventures(){
        return new ResponseEntity<ArrayList<AdventureDTO>>(systemEntityService.getAllAdventures(), HttpStatus.OK);
    }

    @RequestMapping(value = "/getAllVessels", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<VesselDTO>> getAllVessels(){

        return new ResponseEntity<ArrayList<VesselDTO>>(systemEntityService.getAllVessels(), HttpStatus.OK);
    }
    @RequestMapping(value = "/getAllListings", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<ListingDTO>> getAllListings(){

        return new ResponseEntity<ArrayList<ListingDTO>>(systemEntityService.getAllListings(), HttpStatus.OK);
    }

    @RequestMapping(value ="getEntityById", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SystemEntityDTO> getEntityById(@RequestParam int id){
        return new ResponseEntity<SystemEntityDTO>(systemEntityService.getEntityById(id), HttpStatus.OK);
    }


    @RequestMapping(value ="/search", method=RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SystemEntityDTO> search(@RequestBody SearchDTO searchDTO){
        System.out.println(searchDTO.getSearchField());
        return new ResponseEntity<SystemEntityDTO>(new SystemEntityDTO(), HttpStatus.OK);
    }


    @RequestMapping(value ="getCurrentUserAdventures", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<SystemEntityDTO>> getCurrentUserAdventures(@RequestParam String email){
        return new ResponseEntity<ArrayList<SystemEntityDTO>>(systemEntityService.getCurrentUserAdventures(email), HttpStatus.OK);
    }
    @RequestMapping(value ="createSubscribtion", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void createSubscribtion(@RequestParam String username, @RequestParam int entityId){
        systemEntityService.createSubscribtion(entityId, username);
    }


}
