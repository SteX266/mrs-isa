package com.mrsisa.tim22.dto;

import com.mrsisa.tim22.model.Service;

import java.util.ArrayList;
import java.util.List;

public class ServiceDTO extends Service {

    public int numberOfRooms;
    public List<Integer> numberOfBedsPerRoom;
    public String myAddress;
    public String firstImage;

    public ServiceDTO(String image, String name, double price, double rating, String address){
        this.photos = new ArrayList<String>();
        this.photos.add(image);
        this.name = name;
        this.price = price;
        this.myAddress = address;
        this.averageScore = rating;
        this.firstImage = image;
    }

}
