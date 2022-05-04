package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.UserDTO;
import com.mrsisa.tim22.model.AccountCancellationRequest;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/api/user/editUserData", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDTO> editUserData(@RequestParam String email, @RequestParam String name, @RequestParam String surname, @RequestParam String phoneNumber, @RequestParam String addressLine, @RequestParam String streetNumber, @RequestParam String city, @RequestParam String country, @RequestParam String state){

        return new ResponseEntity<UserDTO>(userService.editUserData(email, name, surname, phoneNumber, addressLine, streetNumber, city, country, state), HttpStatus.OK);
    }


    @RequestMapping(value = "/api/user/getCurrentUser", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDTO> getCurrentUser(){

        return new ResponseEntity<UserDTO>(userService.getCurrentUserData(), HttpStatus.OK);
    }


}
