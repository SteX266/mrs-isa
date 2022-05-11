package com.mrsisa.tim22.service;


import com.mrsisa.tim22.dto.ReservationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ReservationService {
    public ArrayList<ReservationDTO> getAllReservations() {
        ArrayList<ReservationDTO> reservations = new ArrayList<>();
        reservations.add(new ReservationDTO(1, "NS,Serbia", "12.5.2022.", 10, 5, 400, "Nikola Nikolic", "waiting"));
        reservations.add(new ReservationDTO(2, "NS,Serbia", "12.5.2022.", 10, 5, 400, "Boba Kikic", "confirmed"));
        reservations.add(new ReservationDTO(3, "NS,Serbia", "12.5.2022.", 10, 5, 400, "Brka Zemljanica", "canceled"));
        return reservations;
    }
}
