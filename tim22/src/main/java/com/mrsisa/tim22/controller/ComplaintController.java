package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = {"*"}, allowedHeaders = "*")
@RequestMapping(value = "/complaint", produces = MediaType.APPLICATION_JSON_VALUE)
public class ComplaintController {
    @Autowired
    ComplaintService complaintService;

    @RequestMapping(value="createComplaint", method = RequestMethod.GET)
    public void createComplaint(@RequestParam String username,@RequestParam int reservationId, @RequestParam String text){
        complaintService.createComplaint(username, reservationId, text);
    }


}
