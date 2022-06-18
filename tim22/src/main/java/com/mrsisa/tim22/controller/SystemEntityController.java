package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.*;
import com.mrsisa.tim22.model.SystemEntity;
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

    @RequestMapping(value ="getEntityById", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SystemEntityDTO> getEntityById(@RequestParam int id){
        return new ResponseEntity<SystemEntityDTO>(systemEntityService.getEntityById(id), HttpStatus.OK);
    }


    @RequestMapping(value ="/search", method=RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SystemEntityDTO> search(@RequestBody SearchDTO searchDTO){
        System.out.println(searchDTO.getSearchField());
        return new ResponseEntity<SystemEntityDTO>(new SystemEntityDTO(), HttpStatus.OK);
    }



    @RequestMapping(value ="getCurrentUserEntities", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<SystemEntityDTO>> getCurrentUserEntities(){


        return new ResponseEntity<ArrayList<SystemEntityDTO>>(systemEntityService.getCurrentUserEntities(), HttpStatus.OK);
    }
    @RequestMapping(value = "/getEntityAvailabilityPeriods", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<AvailabilityPeriodDTO>> getEntityAvailabilityPeriods(@RequestParam int id){
        return new ResponseEntity<ArrayList<AvailabilityPeriodDTO>>(systemEntityService.getEntityAvailabilityPeriods(id), HttpStatus.OK);
    }

    @RequestMapping(value ="createSubscription", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void createSubscription(@RequestParam String username, @RequestParam int entityId){
        systemEntityService.createSubscribtion(entityId, username);
    }

    @RequestMapping(value ="unsubscribe", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void unsubscribe(@RequestParam String username, @RequestParam int entityId){
        systemEntityService.unsubscribe(entityId, username);
    }

    @RequestMapping(value ="getAverageRating", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public double getAverageRating(){
        return systemEntityService.getAverageRating();
    }
    @RequestMapping(value ="getBestRated", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<SystemEntityDTO> getBestRated(){
        return new ResponseEntity<SystemEntityDTO>(systemEntityService.getBestRated(), HttpStatus.OK);

    }
    @RequestMapping(value ="getWorstRated", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<SystemEntityDTO> getWorstRated(){
        return new ResponseEntity<SystemEntityDTO>(systemEntityService.getWorstRated(), HttpStatus.OK);
    }


}
