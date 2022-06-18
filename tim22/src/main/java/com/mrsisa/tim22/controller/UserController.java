package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.*;
import com.mrsisa.tim22.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

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


    @RequestMapping(value ="/change-password", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void changePassword(@RequestParam String oldEmail,@RequestParam String newEmail,@RequestParam String repeat  ){
        userService.changePassword(new PasswordChangeDTO(oldEmail,newEmail,repeat));
    }

    @RequestMapping(value = "/getSubscribeState", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> getSubscribeState(@RequestParam String username, @RequestParam int entityId){

        return new ResponseEntity<Boolean>(userService.getSubscribeState(username, entityId), HttpStatus.OK);
    }


    @RequestMapping(value = "/getClientSubscriptions", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<SystemEntityDTO>> getClientSubscriptions(@RequestParam String username){

        return new ResponseEntity<ArrayList<SystemEntityDTO>>(userService.getClientSubscriptions(username), HttpStatus.OK);
    }








}
