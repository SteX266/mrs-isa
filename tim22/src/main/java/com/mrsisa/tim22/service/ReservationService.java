package com.mrsisa.tim22.service;


import com.mrsisa.tim22.dto.ReservationDTO;
import com.mrsisa.tim22.model.Address;
import com.mrsisa.tim22.model.Reservation;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.repository.ReservationRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private UserRepository userRepository;

    public ArrayList<ReservationDTO> getClientReservations(String username){

        ArrayList<ReservationDTO> reservations = new ArrayList<ReservationDTO>();

        int clientId = userRepository.findOneByUsername(username).getId();
        System.out.println(clientId);
        ArrayList<Reservation> clientReservations = (ArrayList<Reservation>) reservationRepository.findByClient(clientId);

        for(Reservation r:clientReservations){
            if (r.isApproved()) {
                ReservationDTO reservation = new ReservationDTO(r);
                reservations.add(reservation);
            }
        }

        return reservations;
    }

    public void cancelReservation(int entityId) {
        System.out.println("Otkazivanje rezervacije");
        Reservation r = reservationRepository.findOneById(entityId);
        r.setCanceled(true);
        reservationRepository.save(r);
    }

    public void approveReservation(int entityId) {
        System.out.println("Odobravanje rezervacije");
        Reservation r = reservationRepository.findOneById(entityId);
        r.setApproved(true);
        reservationRepository.save(r);
    }

    public ArrayList<ReservationDTO> getOwnerReservations(String username){

        ArrayList<ReservationDTO> reservations = new ArrayList<ReservationDTO>();

        int ownerId = userRepository.findOneByUsername(username).getId();
        ArrayList<Reservation> ownerReservations = (ArrayList<Reservation>) reservationRepository.findByOwner(ownerId);

        for(Reservation r:ownerReservations){
            ReservationDTO reservation = new ReservationDTO(r);

            reservations.add(reservation);
        }

        return reservations;
    }
}
