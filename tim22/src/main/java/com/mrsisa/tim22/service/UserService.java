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

    public User editUserData(String email,String name, String surname, String phoneNumber, String addressLine) {
        User u = userRepository.findOneByUsername(email);
        u.setName(name);
        u.setSurname(surname);
        u.setPhoneNumber(phoneNumber);
        u.setAddress(addressLine);
        userRepository.save(u);
        System.out.println("Podaci za " + email + " uspesno izmenjeni");
        return u;
    }

    public UserDTO getUserByUsername(String username){
        User u = userRepository.findOneByUsername(username);
        return new UserDTO(u.getUsername(),u.getName(), u.getSurname(),u.getPhoneNumber(), u.getAddress(), u.getLoyaltyPoints());

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
        System.out.println("KLJUUUUUUC");
        System.out.println(u.getId());
        u.setId(5);
        return this.userRepository.save(u);

    }

    public User saveUser(User user){
        return this.userRepository.save(user);
    }
}
