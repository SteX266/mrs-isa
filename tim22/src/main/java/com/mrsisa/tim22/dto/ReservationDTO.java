package com.mrsisa.tim22.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReservationDTO {
    public int id;
    public String location;
    public String startDate;
    public String endDate;
    public int visitors;
    public double fee;
    public String owner;
    public String client;

    public String status;
    public String entityName;
}
