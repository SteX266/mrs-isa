package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.SystemEntityDTO;
import com.mrsisa.tim22.model.AccountCancellationRequest;
import com.mrsisa.tim22.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AccountCancellationRequestController {

    @RequestMapping(value = "/api/user/createCancellationRequest", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AccountCancellationRequest> createCancellationRequest(@RequestParam String user){

        return new ResponseEntity<AccountCancellationRequest>(createNewCancellationRequest(user), HttpStatus.OK);
    }

    private AccountCancellationRequest createNewCancellationRequest(String user) {
        User u = new User();
        System.out.println("Kreiran account delete request, user: " +  user);
        AccountCancellationRequest acr = new AccountCancellationRequest(1, "blabla",false, u);
        return acr;
    }
}
