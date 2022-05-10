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

    public UserDTO getCurrentUserData(){
        System.out.println("Uspesno primljen zahtev");
        return new UserDTO("stefan.milosevic.e14@gmail.com","Stefan", "Milosevic","066240610", "Petra Kocica", "38", "Jagodina" , "Srbija", "Pomoravlje");

    }
    public AccountCancellationRequest createNewCancellationRequest(String user) {
        User u = new User();
        System.out.println("Kreiran account delete request, user: " +  user);
        AccountCancellationRequest acr = new AccountCancellationRequest(1, "blabla",false, u);
        return acr;
    }
}
