package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.model.AccountCancellationRequest;
import com.mrsisa.tim22.service.AccountCancellationRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping(value="/cancellationRequest", produces = MediaType.APPLICATION_JSON_VALUE)
public class AccountCancellationRequestController {

    @Autowired
    private AccountCancellationRequestService accountCancellationRequestService;

    @RequestMapping(value = "/createCancellationRequest", method = RequestMethod.GET)
    public void createCancellationRequest(@RequestParam String username, @RequestParam String text){

        accountCancellationRequestService.createNewCancellationRequest(username, text);
    }


}
