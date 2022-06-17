package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.*;
import com.mrsisa.tim22.model.Address;
import com.mrsisa.tim22.model.AvailabilityPeriod;
import com.mrsisa.tim22.model.SystemEntity;

import com.mrsisa.tim22.repository.AvailabilityPeriodRepository;

import com.mrsisa.tim22.model.User;

import com.mrsisa.tim22.repository.SystemEntityRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Service
public class SystemEntityService {

    @Autowired
    private SystemEntityRepository systemEntityRepository;
    @Autowired
    private AvailabilityPeriodRepository availabilityPeriodRepository;
    @Autowired
    private UserRepository userRepository;

    public  ArrayList<AvailabilityPeriodDTO> getEntityAvailabilityPeriods(int id) {
        ArrayList<AvailabilityPeriodDTO> dtos = new  ArrayList<>();
        for ( AvailabilityPeriod ap : availabilityPeriodRepository.findAvailabilityPeriodBySystemEntity_Id(id)){
            dtos.add(new AvailabilityPeriodDTO(ap));
        };
        return(dtos);
    }

    public ArrayList<SystemEntityDTO> getEntities(int startId, int endId){



        System.out.println("Prosao zahtev");
        ArrayList<SystemEntityDTO> entities = new ArrayList<>();
        List<SystemEntity> allEntities = systemEntityRepository.entitiesBetweenIds(startId, endId);



        for (SystemEntity entity : allEntities){
            if (!entity.isDeleted()){
                entities.add(new SystemEntityDTO(entity));
            }
        }


        return entities;

    }
    public SystemEntityDTO getEntityById(int id) {


        SystemEntity entity = systemEntityRepository.findOneById(id);
        return new SystemEntityDTO(entity);

    }

    public ArrayList<SystemEntityDTO> getCurrentUserEntities() {
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String email = user.getUsername();
        ArrayList <SystemEntity> entities=  systemEntityRepository.findSystemEntitiesByOwner_Username(email);

        ArrayList<SystemEntityDTO> entitiesDTO = new ArrayList<>();
         for (SystemEntity entity : entities){
            if (!entity.isDeleted()){
                entitiesDTO.add(new SystemEntityDTO(entity));
            }
        }
        return entitiesDTO;

    }

    public void createSubscribtion(int entityId, String username) {
        SystemEntity e = systemEntityRepository.findOneById(entityId);
        System.out.println(username);
        User u = userRepository.findOneByUsername(username);
        e.addSubscriber(u);
        u.addSubscribtion(e);

        systemEntityRepository.save(e);
        userRepository.save(u);


    }

    public void unsubscribe(int entityId, String username) {
        SystemEntity e = systemEntityRepository.findOneById(entityId);
        User u = userRepository.findOneByUsername(username);

        e.removeSubscriber(u);
        u.removeSubscribtion(e);

        systemEntityRepository.save(e);
        userRepository.save(u);
    }
}
