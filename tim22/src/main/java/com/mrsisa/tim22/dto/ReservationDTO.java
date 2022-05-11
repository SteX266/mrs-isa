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
    public String start;
    public int duration;
    public int visitors;
    public int fee;
    public String client;
    public String status;
}
