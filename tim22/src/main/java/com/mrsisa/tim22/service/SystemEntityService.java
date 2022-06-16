package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.AdventureDTO;
import com.mrsisa.tim22.dto.ListingDTO;
import com.mrsisa.tim22.dto.SystemEntityDTO;
import com.mrsisa.tim22.dto.VesselDTO;
import com.mrsisa.tim22.model.Address;
import com.mrsisa.tim22.model.SystemEntity;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Service
public class SystemEntityService {

    @Autowired
    private SystemEntityRepository systemEntityRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VesselRepository vesselRepository;

    @Autowired
    private AdventureRepository adventureRepositry;

    @Autowired
    private VacationRepository vacationRepository;

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

    public ArrayList<SystemEntityDTO> getCurrentUserAdventures(String email) {
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

    public VesselDTO getDetailVessel(int id) {
        return new VesselDTO(vesselRepository.findVesselById(id));
    }

    public AdventureDTO getDetailAdventures(int id) {
        return new AdventureDTO(adventureRepositry.findAdventureById(id));
    }


    public ListingDTO getDetailVacation(int id) {
        return new ListingDTO(vacationRepository.findVacationById(id));
    }
}
