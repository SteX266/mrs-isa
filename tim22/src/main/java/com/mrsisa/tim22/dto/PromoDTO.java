package com.mrsisa.tim22.dto;

import com.mrsisa.tim22.model.Promo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PromoDTO {

    private Integer id;
    private LocalDateTime dateFrom;
    private LocalDateTime dateTo;
    private String description;
    private Integer systemEntityId;
    private int capacity;
    private double price;


    public PromoDTO(Promo p){
        this.id = p.getId();
        this.dateFrom = p.getDateFrom();
        this.dateTo = p.getDateTo();
        this.description = p.getDescription();
        this.systemEntityId = p.getSystemEntity().getId();
        this.capacity = p.getCapacity();
        this.price = p.getPrice();
    }

}
