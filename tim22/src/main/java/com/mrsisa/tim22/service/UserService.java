package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.SystemEntityDTO;
import com.mrsisa.tim22.dto.UserDTO;
import com.mrsisa.tim22.dto.UserRequest;
import com.mrsisa.tim22.model.*;
import com.mrsisa.tim22.repository.SystemEntityRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SystemEntityRepository systemEntityRepository;

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
        int penaltyNumber = getUserPenalties(u);
        return new UserDTO(u.getUsername(),u.getName(), u.getSurname(),u.getPhoneNumber(), u.getAddress(), u.getLoyaltyPoints(), penaltyNumber);

    }

    private int getUserPenalties(User u) {
        Set<Penalty> penalties = u.getPenalties();
        int penaltyNumber = 0;
        for(Penalty p:penalties){
            if (p.getDate().plusDays(31).isBefore(LocalDate.now()) ){
                penaltyNumber++;
            }
        }
        return penaltyNumber;

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

    public Boolean getSubscribeState(String username, int entityId) {
        User u = userRepository.findOneByUsername(username);

        SystemEntity e = systemEntityRepository.findOneById(entityId);

        for (SystemEntity entity:u.getSubscribtions()){
            System.out.println("ALOOOOOOOOOOO");
            System.out.println(entity.getId());
            System.out.println(entityId);
            if (entity.getId() == entityId){
                System.out.println("USAOOOO");
                return true;
            }
        }

        return false;


    }

    public ArrayList<SystemEntityDTO> getClientSubscriptions(String username) {
        User u = userRepository.findOneByUsername(username);
        ArrayList<SystemEntityDTO> entities = new ArrayList<>();
        for(SystemEntity entity: u.getSubscribtions()){
            if(!entity.isDeleted()){
                entities.add(new SystemEntityDTO(entity));
            }
        }
        return entities;

    }
}
