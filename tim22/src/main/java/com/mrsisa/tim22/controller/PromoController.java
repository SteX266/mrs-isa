package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.PromoDTO;
import com.mrsisa.tim22.service.PromoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping(value = "/promo", produces = MediaType.APPLICATION_JSON_VALUE)
public class PromoController {

    @Autowired
    private PromoService promoService;

    @RequestMapping(value = "/getEntityPromos", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<PromoDTO>> getEntityPromos(@RequestParam int id){
        return new ResponseEntity<ArrayList<PromoDTO>>(promoService.getEntityPromos(id), HttpStatus.OK);
    }
    @PostMapping("/create")
    public PromoDTO create(@RequestBody PromoDTO newPromo){
        return promoService.createPromoFromDTO(newPromo);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePromo(@PathVariable int id) {
        if(promoService.deleteById(id)) {
            return new ResponseEntity<>("Successfully deleted promo.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Promo already reserved.", HttpStatus.IM_USED);
        }
    }


}
