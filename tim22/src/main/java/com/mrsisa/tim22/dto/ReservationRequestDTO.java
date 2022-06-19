package com.mrsisa.tim22.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReservationRequestDTO {
    public String dateFrom;
    public String dateTo;
    public int entityId;

}
