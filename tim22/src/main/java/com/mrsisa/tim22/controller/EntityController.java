package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.SystemEntityDTO;
import com.mrsisa.tim22.service.EntityService;
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
public class EntityController {

    @Autowired
    private EntityService entityService;

    @RequestMapping(value = "/api/entity/getAllEntities", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<SystemEntityDTO>> getAllEntitites(){

        return new ResponseEntity<ArrayList<SystemEntityDTO>>(entityService.getEntities(), HttpStatus.OK);
    }


}
