package com.mrsisa.tim22.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReservationsReportDTO {
    private String name;
    private int amount;


    public void increaseAmount(){
        this.amount += 1;
    }
}
