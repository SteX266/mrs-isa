package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.UserDTO;
import com.mrsisa.tim22.model.AccountCancellationRequest;
import com.mrsisa.tim22.model.User;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class UserService {


    public UserDTO editUserData(String email,String name, String surname, String phoneNumber, String addressLine, String streetNumber, String city, String country, String state) {
        System.out.println("Izmenjeni podaci za "+ email + " Name: " + name+ " Surname: "+surname+" Phone number: " + phoneNumber);
        return new UserDTO();
    }
}
