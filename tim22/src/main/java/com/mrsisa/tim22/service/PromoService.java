package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.PromoDTO;
import com.mrsisa.tim22.model.Promo;
import com.mrsisa.tim22.repository.PromoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PromoService {

    @Autowired
    private PromoRepository promoRepository;

    public ArrayList<PromoDTO> getEntityPromos(int id) {
        ArrayList<Promo> promos = (ArrayList<Promo>) promoRepository.findByEntity(id);
        ArrayList<PromoDTO> promoDTOS = new ArrayList<PromoDTO>();
        for(Promo p:promos){
            PromoDTO promoDTO = new PromoDTO(p);
            promoDTOS.add(promoDTO);
        }

        return promoDTOS;
    }
}
