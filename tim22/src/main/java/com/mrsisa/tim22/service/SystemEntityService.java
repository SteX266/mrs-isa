package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.SystemEntityDTO;
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
        ArrayList<SystemEntityDTO> entities = new ArrayList<>();/*
        entities.add(new SystemEntityDTO("https://www.gradnja.rs/wp-content/uploads/2022/02/luksuzne-vikendice-srbija-izajmljivanje-gradnja.rs_.jpg", "Puz", 500, 3, "Njegoseva 22"));
        entities.add(new SystemEntityDTO("https://www.gradnja.rs/wp-content/uploads/2021/01/balaton-vikendica.jpg", "Kuzis", 300, 4, "Petra Kocica 38"));
        entities.add(new SystemEntityDTO("https://cf.bstatic.com/xdata/images/hotel/max1024x768/187868702.jpg?k=4368f5637f7ff4c79e5c7f993e37c48850d3e9d7d514486c15e971a4aa45ed38&o=&hp=1", "Nesto", 200, 5, "Milos"));
        entities.add(new SystemEntityDTO("https://www.gdenaplaninu.com/uploads/images/objekti/200/vikendicA.jpg", "Nesto", 200, 5, "Milos"));
        entities.add(new SystemEntityDTO("https://media.mojtrg.rs/Image/ce9e459c7a9e46bdb35cd246288f903b/20150907/false/false/1280/960/Vikendica-od-65m2--Kopaonik.jpeg", "Nesto", 200, 5, "Milos"));
        entities.add(new SystemEntityDTO("https://www.mojenterijer.rs/storage/posts/gallery/2017/Dec/115648/sarmantna-vikendica-u-kanadi.jpg", "Nesto", 200, 5, "Milos"));
        entities.add(new SystemEntityDTO("https://img.halooglasi.com/slike/oglasi/Thumbs/200904/l/prodaje-se-vikendica-25-m2-g-goracici-prijepo-5425635877817-71792611911.jpg", "Nesto", 200, 5, "Milos"));
        entities.add(new SystemEntityDTO("http://sveoosiguranju.rs/wp-content/uploads/2015/11/bjr09xv43ev38ei8feec.jpg", "Nesto", 200, 5, "Milos"));*/

        List<SystemEntity> allEntities = systemEntityRepository.findAll();

        for (SystemEntity entity : allEntities){
            if (!entity.isDeleted()){
                entities.add(createEntityDTO(entity));
            }
        }


        return entities;

    }

    private SystemEntityDTO createEntityDTO(SystemEntity entity) {

        String photo;
        String address = "";
        if (entity.getPhotos().size() > 0){
            System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            photo = entity.getPhotos().get(0);
            System.out.println(photo);

        }
        else{
            photo = "";
        }

        Address a = entity.getAddress();

        address += a.getStreetName();
        address += " ";
        address += String.valueOf(a.getStreetNumber());
        address += ", ";
        address += a.getCity();
        address += ", ";
        address += a.getCountry();

        return new SystemEntityDTO(photo, entity.getName(), entity.getPrice(), entity.getAverageScore(), address);
    }
}
