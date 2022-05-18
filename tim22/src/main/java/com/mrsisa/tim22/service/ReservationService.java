package com.mrsisa.tim22.service;


import com.mrsisa.tim22.dto.ReservationDTO;
import com.mrsisa.tim22.model.Reservation;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.repository.ReservationRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ReservationService {

    private ReservationRepository reservationRepository;
    private UserRepository userRepository;


    public ArrayList<ReservationDTO> getAllReservations() {
        ArrayList<ReservationDTO> reservations = new ArrayList<>();
        reservations.add(new ReservationDTO(1, "NS,Serbia", "12.5.2022.", 10, 5, 400, "Nikola Nikolic", "waiting","Neka kuca"));
        reservations.add(new ReservationDTO(2, "NS,Serbia", "12.5.2022.", 10, 5, 400, "Boba Kikic", "confirmed","Neka druga kuca"));
        reservations.add(new ReservationDTO(3, "NS,Serbia", "12.5.2022.", 10, 5, 400, "Brka Zemljanica", "canceled","Neka treca kuca"));
        return reservations;
    }
    public ArrayList<ReservationDTO> getClientReservations(String username){

        ArrayList<ReservationDTO> reservations = new ArrayList<ReservationDTO>();
        reservations.add(new ReservationDTO(1, "Alekse Santica 4", "20.05.2022.", 5, 2, 15, "Vanja Serfeze", "waiting", "Prva rezervacija"));
        System.out.println(username);
/*
        User u = userRepository.findOneByUsername(username);
        int clientId = userRepository.findOneByUsername(username).getId();

        System.out.println(clientId);


        ArrayList<Reservation> clientReservations = (ArrayList<Reservation>) reservationRepository.findByClient(clientId);

        int id = 0;
        for(Reservation r:clientReservations){
            ReservationDTO reservation = new ReservationDTO(id,"NS, Serbia", String.valueOf(r.getDateFrom()),5,r.getSystemEntity().getCapacity(), r.getSystemEntity().getCancellationFee(), r.getSystemEntity().getOwner().getName() + " " + r.getSystemEntity().getOwner().getSurname(),"waiting",r.getSystemEntity().getName() );
            id++;
            reservations.add(reservation);
        }
*/
        return reservations;
    }

}
