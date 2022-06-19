package com.mrsisa.tim22.service;


import com.mrsisa.tim22.dto.ReservationDTO;
import com.mrsisa.tim22.dto.ReservationRequestDTO;
import com.mrsisa.tim22.model.*;
import com.mrsisa.tim22.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PromoRepository promoRepository;
    @Autowired
    private SystemEntityRepository systemEntityRepository;

    @Autowired
    private PenaltyRepository penaltyRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private LoyaltyProgramRepository loyaltyProgramRepository;


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

    public ArrayList<ReservationDTO> getEntityReservations(int id){

        ArrayList<ReservationDTO> reservations = new ArrayList<ReservationDTO>();

        int entityId = systemEntityRepository.findOneById(id).getId();
        ArrayList<Reservation> entityReservations = (ArrayList<Reservation>) reservationRepository.findByEntity(entityId);

        for(Reservation r:entityReservations){
            if (r.isApproved()&& r.getDateTo().isAfter(LocalDateTime.now())) {
                if( r.getDateFrom().isBefore(LocalDateTime.now())) {
                    r.setDateFrom(LocalDateTime.now());
                }
                ReservationDTO reservation = new ReservationDTO(r);
                reservations.add(reservation);
            }
        }

        return reservations;
    }

    public boolean cancelReservation(int entityId) {
        Reservation r = reservationRepository.findOneById(entityId);
        if (LocalDateTime.now().plusDays(3).isAfter(r.getDateFrom())){
            return false;

        }
        User u = r.getClient();
        Penalty p = new Penalty(u);
        u.addPenalty(p);

        r.setCanceled(true);
        penaltyRepository.save(p);
        reservationRepository.save(r);

        return true;
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

    public void createPromoReservation(int promoId, String username) {
        Promo p = promoRepository.findOneById(promoId);
        User u = userRepository.findOneByUsername(username);
        Reservation r = new Reservation(p, u);
        p.setTaken(true);
        promoRepository.save(p);
        reservationRepository.save(r);
    }

    public boolean makeReservation(ReservationRequestDTO reservationRequest) {
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String email = user.getUsername();
        User u = userRepository.findOneByUsername(email);
        if(u.getUserPenalties() >=3){
            return false;
        }
        SystemEntity entity = systemEntityRepository.findOneById(reservationRequest.getEntityId());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        LocalDateTime dateFrom = LocalDateTime.parse(reservationRequest.dateFrom.replace("T"," ").substring(0,16), formatter);
        LocalDateTime dateTo = LocalDateTime.parse(reservationRequest.dateTo.replace("T"," ").substring(0,16), formatter);
        long diff = ChronoUnit.MINUTES.between(dateFrom, dateTo);


        double clientPrice = calculateClientPrice(diff, entity.getPrice(), u.getLoyaltyPoints());
        double ownerPrice = calculateOwnerPrice(diff,entity.getPrice(), entity.getOwner().getLoyaltyPoints());


        Reservation reservation = new Reservation(entity, dateFrom.plusHours(2), dateTo.plusHours(2), u, clientPrice, ownerPrice);
        reservationRepository.save(reservation);


        User owner = entity.getOwner();



        LoyaltyProgram loyaltyProgram = this.loyaltyProgramRepository.getOne(1);
        u.addPoints(loyaltyProgram.getPointsPerReservation());
        owner.addPoints(loyaltyProgram.getPointsForBusiness());
        userRepository.save(u);
        userRepository.save(owner);

        emailService.sendConfirmReservationEmail(email, entity.getName());

        return true;
    }



    private double calculateOwnerPrice(long diff, double price, int loyaltyPoints) {
        LoyaltyProgram loyaltyProgram = this.loyaltyProgramRepository.getOne(1);
        int percentage = loyaltyProgram.getDiscountByPoints(loyaltyPoints);
        return diff / (60*24.0) * price * ((80+percentage)/100.0);
    }

    private double calculateClientPrice(long diff, double price, int loyaltyPoints) {
        LoyaltyProgram loyaltyProgram = this.loyaltyProgramRepository.getOne(1);
        int percentage = loyaltyProgram.getDiscountByPoints(loyaltyPoints);
        return diff / (60*24.0) * price * ((100-percentage)/100.0);

    }
}
