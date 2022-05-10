package com.mrsisa.tim22.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VesselDTO {
    public int id;
    public String name;
    public String location;
    public int length;
    public int capacity;
    public int price;
}
