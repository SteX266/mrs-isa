package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.UserDTO;
import com.mrsisa.tim22.dto.UserRequest;
import com.mrsisa.tim22.model.AccountCancellationRequest;
import com.mrsisa.tim22.model.Role;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleService roleService;

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
        User us = userRepository.findOneByUsername("stex266@gmail.com");

        System.out.println(us.getName());

        return acr;
    }
    public User findByUsername(String email){
        return userRepository.findOneByUsername(email);

    }
    public User findOneById(Integer id){
        return userRepository.findOneById(id);
    }

    public User save(UserRequest userRequest) {
        User u = new User();
        u.setUsername(userRequest.getUsername());

        // pre nego sto postavimo lozinku u atribut hesiramo je kako bi se u bazi nalazila hesirana lozinka
        // treba voditi racuna da se koristi isi password encoder bean koji je postavljen u AUthenticationManager-u kako bi koristili isti algoritam
        u.setPassword(passwordEncoder.encode(userRequest.getPassword()));

        u.setName(userRequest.getName());
        u.setSurname(userRequest.getSurname());
        u.setEnabled(false);
        u.setAddress(userRequest.getAddressLine());
        u.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        u.setPhoneNumber(userRequest.getPhoneNumber());
        // u primeru se registruju samo obicni korisnici i u skladu sa tim im se i dodeljuje samo rola USER
        List<Role> roles = roleService.findByName("CLIENT");
        u.setRoles(roles);

        return this.userRepository.save(u);
    }

    public User saveUser(User user){
        return this.userRepository.save(user);
    }
}
