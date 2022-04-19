package com.mrsisa.tim22.dto;

import com.mrsisa.tim22.model.Service;

import java.util.ArrayList;
import java.util.List;

public class VacationDTO extends Service {

    private int numberOfRooms;
    private List<Integer> numberOfBedsPerRoom;
    String myAddress;
    String firstImage;

    public VacationDTO(String image, String name, double price, double rating, String address){
        this.photos = new ArrayList<String>();
        this.photos.add(image);
        this.name = name;
        this.price = price;
        this.myAddress = address;
        this.averageScore = rating;
        this.firstImage = image;
    }

}
