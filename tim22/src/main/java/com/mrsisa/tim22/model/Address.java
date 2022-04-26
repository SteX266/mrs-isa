package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Address {
    private String city;
    private String country;
    private String streetName;
    private int streetNumber;
}
