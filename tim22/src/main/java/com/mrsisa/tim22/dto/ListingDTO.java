package com.mrsisa.tim22.dto;

import com.mrsisa.tim22.model.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ListingDTO {
    protected String name;
    protected String description;
    protected Address address;
    protected int capacity;
    protected List<String> photos;
    protected String rulesOfConduct;
    protected List<Amenity> amenities;
    protected double cancellationFee;
    protected Set<AvailabilityPeriod> availabilityPeriod = new HashSet<AvailabilityPeriod>();
    protected double price;

    public ListingDTO(Vacation v){
        this.name = v.getName();
        this.description=v.getDescription();
        this.address=v.getAddress();
        this.capacity=v.getCapacity();
        this.photos=v.getPhotos();
        this.rulesOfConduct=v.getRulesOfConduct();
        this.amenities=v.getAmenities();
        this.cancellationFee =v.getCancellationFee();
        this.availabilityPeriod=v.getAvailabilityPeriod();
        this.price=v.getPrice();
    }}