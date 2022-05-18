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

    public ArrayList<SystemEntityDTO> getEntities(){



        System.out.println("Prosao zahtev");
        ArrayList<SystemEntityDTO> entities = new ArrayList<>();
        entities.add(new SystemEntityDTO(1,"https://www.gradnja.rs/wp-content/uploads/2022/02/luksuzne-vikendice-srbija-izajmljivanje-gradnja.rs_.jpg", "Puz", 500, 3, "Njegoseva 22", "VACATION"));
        entities.add(new SystemEntityDTO(2,"https://www.gradnja.rs/wp-content/uploads/2021/01/balaton-vikendica.jpg", "Kuzis", 300, 4, "Petra Kocica 38, Jagodina", "VACATION"));
        entities.add(new SystemEntityDTO(3,"https://cf.bstatic.com/xdata/images/hotel/max1024x768/187868702.jpg?k=4368f5637f7ff4c79e5c7f993e37c48850d3e9d7d514486c15e971a4aa45ed38&o=&hp=1", "Nesto", 200, 5, "Alekse Santica 4, Novi Sad", "VESSEL"));
        entities.add(new SystemEntityDTO(4,"https://www.gdenaplaninu.com/uploads/images/objekti/200/vikendicA.jpg", "Nesto", 200, 5, "Alekse Santica 26, Novi Sad", "ADVENTURE"));
        entities.add(new SystemEntityDTO(5,"https://media.mojtrg.rs/Image/ce9e459c7a9e46bdb35cd246288f903b/20150907/false/false/1280/960/Vikendica-od-65m2--Kopaonik.jpeg", "Nesto", 200, 5, "Alekse Santica 11, Novi Sad", "ADVENTURE"));
        entities.add(new SystemEntityDTO(6,"https://www.mojenterijer.rs/storage/posts/gallery/2017/Dec/115648/sarmantna-vikendica-u-kanadi.jpg", "Nesto", 200, 5, "Alekse Santica 22, Novi Sad","VACATION"));
        entities.add(new SystemEntityDTO(7,"https://img.halooglasi.com/slike/oglasi/Thumbs/200904/l/prodaje-se-vikendica-25-m2-g-goracici-prijepo-5425635877817-71792611911.jpg", "Nesto", 200, 5, "Brace Ribnika, Novi Sad", "VACATION"));
        entities.add(new SystemEntityDTO(8,"http://sveoosiguranju.rs/wp-content/uploads/2015/11/bjr09xv43ev38ei8feec.jpg", "Nesto", 200, 5, "Gogoljeva, Novi Sad","VESSEL"));

        /*
        List<SystemEntity> allEntities = systemEntityRepository.findAll();

        for (SystemEntity entity : allEntities){
            if (!entity.isDeleted()){
                entities.add(createEntityDTO(entity));
            }
        }
        */

        return entities;

    }

    private SystemEntityDTO createEntityDTO(SystemEntity entity) {

        String photo;
        if (entity.getPhotos().size() > 0){
            System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            photo = entity.getPhotos().get(0);
            System.out.println(photo);

        }
        else{
            photo = "";
        }


        String address = "";
        Address a = entity.getAddress();
        address += a.getStreetName();
        address += " ";
        address += String.valueOf(a.getStreetNumber());
        address += ", ";
        address += a.getCity();
        address += ", ";
        address += a.getCountry();

        return new SystemEntityDTO(1,photo, entity.getName(), entity.getPrice(), entity.getAverageScore(), address,"VACATION");
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

}
