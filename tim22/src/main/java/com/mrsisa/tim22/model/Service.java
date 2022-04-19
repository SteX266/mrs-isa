package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public abstract class Service {

    protected int id;
    protected String name;
    protected String description;
    protected Address address;
    protected List<String> photos;
    protected String rulesOfConduct;
    protected List<Amenity> amenities;
    protected boolean isDeleted;
    protected List<Promo> promos;
    protected double cancellationFee;
    protected double averageScore;
    protected List<Review> reviews;
    protected double price;

}
