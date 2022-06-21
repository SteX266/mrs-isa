package com.mrsisa.tim22.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FilterDTO {
    private int rentalFeeFrom;
    private int rentalFeeTo;
    private int cancellationFeeFrom;
    private int cancellationFeeTo;
    private int guestsFrom;
    private int guestsTo;
    private String street;
    private String city;
    private String country;

    private int startIndex;
    private int endIndex;

    private String type;
}
