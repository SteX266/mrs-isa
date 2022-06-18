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
    public int rentalFeeFrom;
    public int rentalFeeTo;
    public int cancellationFeeFrom;
    public int cancellationFeeTo;
    public int guestsFrom;
    public int guestsTo;
    public String street;
    public String city;
    public String country;

    public int startIndex;
    public int endIndex;

    public String type;
}
