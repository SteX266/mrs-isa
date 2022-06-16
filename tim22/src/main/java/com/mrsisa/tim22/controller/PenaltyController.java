package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.service.PenaltyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"*"}, allowedHeaders = "*")
@RequestMapping(value = "/penalty", produces = MediaType.APPLICATION_JSON_VALUE)
public class PenaltyController {

    @Autowired
    PenaltyService penaltyService;



}
