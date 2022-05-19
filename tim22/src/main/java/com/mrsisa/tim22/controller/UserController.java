package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.UserCredentialsDTO;
import com.mrsisa.tim22.dto.UserDTO;
import com.mrsisa.tim22.dto.UserRequest;
import com.mrsisa.tim22.dto.UserTokenState;
import com.mrsisa.tim22.model.AccountCancellationRequest;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping(value = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    @Autowired
    private UserService userService;


    @RequestMapping(value = "/editUserData", method = RequestMethod.GET)
    public void editUserData(@RequestParam String email, @RequestParam String name, @RequestParam String surname, @RequestParam String phoneNumber, @RequestParam String addressLine){
        userService.editUserData(email,name,surname,phoneNumber,addressLine);
    }


    @RequestMapping(value = "/getUserByUsername", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDTO> getCurrentUser(@RequestParam String username){

        return new ResponseEntity<UserDTO>(userService.getUserByUsername(username), HttpStatus.OK);
    }






}
