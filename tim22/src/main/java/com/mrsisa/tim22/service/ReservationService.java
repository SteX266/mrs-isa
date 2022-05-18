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


    public ArrayList<ReservationDTO> getAllReservations() {
        ArrayList<ReservationDTO> reservations = new ArrayList<>();
        reservations.add(new ReservationDTO(1, "NS,Serbia", "12.5.2022.","",  5, 400, "Nikola Nikolic", "Stefan Milosevic","waiting","Neka kuca"));
        reservations.add(new ReservationDTO(2, "NS,Serbia", "12.5.2022.", "", 5, 400, "Boba Kikic","Stefan Milosevic", "confirmed","Neka druga kuca"));
        reservations.add(new ReservationDTO(3, "NS,Serbia", "12.5.2022.","",  5, 400, "Brka Zemljanica","Stefan Milosevic", "canceled","Neka treca kuca"));
        return reservations;
    }
    public ArrayList<ReservationDTO> getClientReservations(String username){

        ArrayList<ReservationDTO> reservations = new ArrayList<ReservationDTO>();

        User u = userRepository.findOneByUsername(username);
        int clientId = userRepository.findOneByUsername(username).getId();
        System.out.println(clientId);
        ArrayList<Reservation> clientReservations = (ArrayList<Reservation>) reservationRepository.findByClient(clientId);

        for(Reservation r:clientReservations){
            if (r.isApproved()) {
                String address = createAddressString(r.getSystemEntity().getAddress());
                String status = createStatusString(r.isCanceled());
                ReservationDTO reservation = new ReservationDTO(r.getId(), address, String.valueOf(r.getDateFrom()), String.valueOf(r.getDateTo()), r.getSystemEntity().getCapacity(), r.getSystemEntity().getCancellationFee(), r.getSystemEntity().getOwner().getName() + " " + r.getSystemEntity().getOwner().getSurname(), r.getClient().getName() + " " + r.getClient().getSurname(), status, r.getSystemEntity().getName());
                reservations.add(reservation);
            }
        }

        return reservations;
    }

    private String createStatusString(boolean canceled) {
        if (canceled){
            return "CANCELED";
        }
        else{
            return "WAITING";
        }
    }

    private String createAddressString(Address address) {
        String addressString = "";
        addressString += address.getStreetName();
        addressString += " ";
        addressString += String.valueOf(address.getStreetNumber());
        addressString += ", ";
        addressString += address.getCity();
        addressString += ", ";
        addressString += address.getCountry();
        return addressString;
    }

    public void cancelReservation(int entityId) {
        System.out.println("Otkazivanje rezervacije");
        Reservation r = reservationRepository.findOneById(entityId);
        r.setCanceled(true);
        reservationRepository.save(r);
    }

    public void approveReservation(int entityId) {
        Reservation r = reservationRepository.findOneById(entityId);
        r.setApproved(true);
        reservationRepository.save(r);
    }
}
