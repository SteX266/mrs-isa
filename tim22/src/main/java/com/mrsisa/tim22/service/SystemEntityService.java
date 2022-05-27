package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.AdventureDTO;
import com.mrsisa.tim22.dto.ListingDTO;
import com.mrsisa.tim22.dto.SystemEntityDTO;
import com.mrsisa.tim22.dto.VesselDTO;
import com.mrsisa.tim22.model.Address;
import com.mrsisa.tim22.model.SystemEntity;
import com.mrsisa.tim22.repository.SystemEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Service
public class SystemEntityService {

    @Autowired
    private SystemEntityRepository systemEntityRepository;

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

    public ArrayList<AdventureDTO> getAllAdventures() {
        System.out.println("Prosao zahtev");
        ArrayList<AdventureDTO> adventures = new ArrayList<>();
        adventures.add(new AdventureDTO(1,"Prva Avantura","NS,Serbia",4,34));
        adventures.add(new AdventureDTO( 2,"Druga Avantura","Banjaluka,Bosnia",3,45));
        adventures.add(new AdventureDTO( 3,"Treca","Mostar,Bosnia",3,32));
        adventures.add(new AdventureDTO(4,"D Avantura","Mostar,Bosnia",2,54));
        adventures.add(new AdventureDTO( 5,"Dadadal","Zrenjanin,Serbia",2,56));
        adventures.add(new AdventureDTO( 6,"ne znaaaam","Sremska Mitrovia, Serbia",3,312));
        adventures.add(new AdventureDTO( 7,"DMozeee","Kikinda,Serbia",5,45));
        adventures.add(new AdventureDTO( 8,"Beogradd","Jagodina,Serbia",1,12));
        adventures.add(new AdventureDTO( 9,"Drudadsa","Jajce,Bosnia",3,213));
        adventures.add(new AdventureDTO( 10,"Druadasd","Bjeljina,Bosnia",4,11));
        return adventures;
    }
    public ArrayList<VesselDTO> getAllVessels() {
        System.out.println("Prosao zahtev");
        ArrayList<VesselDTO> vessels = new ArrayList<>();
        vessels.add(new VesselDTO(1, "First vessel", "NS, Serbia", 20, 4, 30));
        vessels.add(new VesselDTO(2, "Second vessel", "BG, Serbia", 22, 5, 40));
        vessels.add(new VesselDTO(3, "Third vessel", "ZR, Serbia", 15, 2, 15));
        vessels.add(new VesselDTO(4, "Fourth vessel", "JA, Serbia", 25, 5, 50));
        vessels.add(new VesselDTO(5, "Fifth vessel", "NI, Serbia", 20, 6, 60));
        return vessels;
    }
    public ArrayList<ListingDTO> getAllListings() {
        System.out.println("Prosao zahtev");
        ArrayList<ListingDTO> listings = new ArrayList<>();
        listings.add(new ListingDTO(1, "Listing one", "NS, Serbia", 4, 5, 30));
        listings.add(new ListingDTO(2, "Listing two", "NS, Serbia", 4, 5, 30));
        listings.add(new ListingDTO(3, "Listing three", "NS, Serbia", 3, 6, 20));
        listings.add(new ListingDTO(4, "Listing four", "NS, Serbia", 4, 5, 40));
        listings.add(new ListingDTO(5, "Listing five", "NS, Serbia", 2, 1, 15));
        return listings;
    }

    public SystemEntityDTO getEntityById(int id) {


        SystemEntity entity = systemEntityRepository.findOneById(id);
        return new SystemEntityDTO(entity);

    }
}
