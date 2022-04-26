package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Promo {
    private LocalDateTime dateFrom;
    private LocalDateTime dateTo;
    private String description;
    private Service service;
    private int numberOfPeople;
    private double price;
}
