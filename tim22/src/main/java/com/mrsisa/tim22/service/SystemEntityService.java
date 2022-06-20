package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.*;
import com.mrsisa.tim22.model.*;

import com.mrsisa.tim22.repository.AvailabilityPeriodRepository;

import com.mrsisa.tim22.repository.*;

import com.mrsisa.tim22.repository.ReservationRepository;
import com.mrsisa.tim22.repository.SystemEntityRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class SystemEntityService {

    @Autowired
    private SystemEntityRepository systemEntityRepository;
    @Autowired
    private AvailabilityPeriodRepository availabilityPeriodRepository;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private VesselRepository vesselRepository;

    @Autowired
    private AdventureRepository adventureRepositry;

    @Autowired
    private VacationRepository vacationRepository;


    public  ArrayList<AvailabilityPeriodDTO> getEntityAvailabilityPeriods(int id) {
        ArrayList<AvailabilityPeriodDTO> dtos = new  ArrayList<>();
        for ( AvailabilityPeriod ap : availabilityPeriodRepository.findAvailabilityPeriodBySystemEntity_Id(id)){
            dtos.add(new AvailabilityPeriodDTO(ap));
        }

        return (dtos);
    }


    public ArrayList<SystemEntityDTO> getEntities(int startId, int endId){
        System.out.println("Prosao zahtev");
        ArrayList<SystemEntityDTO> entities = new ArrayList<>();
        List<SystemEntity> allEntities = systemEntityRepository.entitiesBetweenIds(startId, endId);
        for (SystemEntity entity : allEntities){
            if (!entity.isDeleted()){
                entities.add(new SystemEntityDTO(entity));
            }
        }
        return entities;
    }

    public Integer getFilteredEntitiesTotalNumber(FilterDTO filters) {
        List<SystemEntity> filteredList = new ArrayList<>();

        for(SystemEntity entity:systemEntityRepository.findAll()){
            if (entity.getEntityType().toString().equals(filters.type) || filters.type.equals("SHOW_ALL")){
                if(entity.getPrice() > filters.rentalFeeFrom && entity.getPrice() < filters.rentalFeeTo){
                    if(entity.getCancellationFee() > filters.getCancellationFeeFrom() && entity.getCancellationFee() < filters.getCancellationFeeTo()){
                        if(entity.getCapacity() > filters.guestsFrom && entity.getCapacity() < filters.guestsTo){
                            Address address = entity.getAddress();
                            if (address.getStreetName().contains(filters.street) && address.getCity().contains(filters.city) && address.getCountry().contains(filters.country)){
                                filteredList.add(entity);
                            }
                        }
                    }
                }
            }
        }
        return filteredList.size();

    }
    public ArrayList<SystemEntityDTO> getFilteredEntities(FilterDTO filters) {
        List<SystemEntity> filteredList = new ArrayList<>();

        for(SystemEntity entity:systemEntityRepository.findAll()){
            if (entity.getEntityType().toString().equals(filters.type) || filters.type.equals("SHOW_ALL")){
                if(entity.getPrice() > filters.rentalFeeFrom && entity.getPrice() < filters.rentalFeeTo){
                    if(entity.getCancellationFee() > filters.getCancellationFeeFrom() && entity.getCancellationFee() < filters.getCancellationFeeTo()){
                        if(entity.getCapacity() > filters.guestsFrom && entity.getCapacity() < filters.guestsTo){
                            Address address = entity.getAddress();
                            if (address.getStreetName().contains(filters.street) && address.getCity().contains(filters.city) && address.getCountry().contains(filters.country)){
                                filteredList.add(entity);
                            }
                        }
                    }
                }
            }
        }
        ArrayList<SystemEntityDTO> systemEntityDTOS = new ArrayList<>();

        int count = 0;
        for (SystemEntity entity:filteredList){
            count++;
            if(count >= filters.startIndex && count <= filters.endIndex){
                systemEntityDTOS.add(new SystemEntityDTO(entity));
            }
        }
        return systemEntityDTOS;
    }

    public SystemEntityDTO getEntityById(int id) {


        SystemEntity entity = systemEntityRepository.findOneById(id);
        return new SystemEntityDTO(entity);

    }

    public ArrayList<SystemEntityDTO> getCurrentUserEntities() {
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String email = user.getUsername();
        ArrayList<SystemEntity> entities = systemEntityRepository.findSystemEntitiesByOwner_Username(email);

        ArrayList<SystemEntityDTO> entitiesDTO = new ArrayList<>();
        for (SystemEntity entity : entities) {
            if (!entity.isDeleted()) {
                entitiesDTO.add(new SystemEntityDTO(entity));
            }
        }
        return entitiesDTO;

    }

    public void createSubscribtion(int entityId, String username) {
        SystemEntity e = systemEntityRepository.findOneById(entityId);
        System.out.println(username);
        User u = userRepository.findOneByUsername(username);
        e.addSubscriber(u);
        u.addSubscribtion(e);

        systemEntityRepository.save(e);
        userRepository.save(u);


    }

    public void unsubscribe(int entityId, String username) {
        SystemEntity e = systemEntityRepository.findOneById(entityId);
        User u = userRepository.findOneByUsername(username);

        e.removeSubscriber(u);
        u.removeSubscribtion(e);

        systemEntityRepository.save(e);
        userRepository.save(u);
    }

    public double getAverageRating() {
        double sum = 0;
        double len = 0;
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String email = user.getUsername();
        for (SystemEntity e : systemEntityRepository.findSystemEntitiesByOwner_Username(email)) {
            sum += e.getAverageScore();
            len += 1;
        }
        if (len == 0) {
            return 0;
        }
        return sum / len;
    }

    public SystemEntityDTO getBestRated() {
        SystemEntity id = null;
        double bestRating = 0;
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String email = user.getUsername();
        for (SystemEntity e : systemEntityRepository.findSystemEntitiesByOwner_Username(email)) {
            if (e.getAverageScore() > bestRating) {
                bestRating = e.getAverageScore();
                id = e;
            }
        }

        return new SystemEntityDTO(id);
    }

    public SystemEntityDTO getWorstRated() {
        SystemEntity id = null;
        double worst = 5;
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String email = user.getUsername();
        for (SystemEntity e : systemEntityRepository.findSystemEntitiesByOwner_Username(email)) {
            if (e.getAverageScore() < worst) {
                worst = e.getAverageScore();
                id = e;
            }
        }

        return new SystemEntityDTO(id);
    }

    public ArrayList<ReservationsReportDTO> getReservationsAmountMonthly() {
        LocalDateTime start = LocalDateTime.now().minusYears(1);
        LocalDateTime now = LocalDateTime.now();
        ArrayList<ReservationsReportDTO> dtos = new ArrayList<>();
        while (!start.isAfter(now)){
            String k = String.valueOf(start.getMonth()) +" - " + String.valueOf(start.getYear());
            dtos.add(new ReservationsReportDTO(k, 0));
            start =start.plusMonths(1);
        }
        start = LocalDateTime.now().minusYears(1);
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String email = user.getUsername();
        for (SystemEntity e : systemEntityRepository.findSystemEntitiesByOwner_Username(email)) {
            for (Reservation r : e.getReservations()) {
                if(r.getDateFrom().isBefore(now) && r.getDateFrom().isAfter(start)) {
                    String k = String.valueOf(r.getDateFrom().getMonth()) + " - " + String.valueOf(r.getDateFrom().getYear());
                    for (ReservationsReportDTO report : dtos) {
                        if (report.getName().equals(k)) {
                            report.increaseAmount();
                        }
                    }

                }
            }
        }
        return dtos;
    }

    public ArrayList<ReservationsReportDTO> getReservationsAmountYearly() {
        LocalDateTime start = LocalDateTime.now().minusYears(10);
        LocalDateTime now = LocalDateTime.now();
        ArrayList<ReservationsReportDTO> dtos = new ArrayList<>();
        while (!start.isAfter(now)){
            String k = String.valueOf(start.getYear());
            dtos.add(new ReservationsReportDTO(k, 0));
            start =start.plusYears(1);
        }
        start = LocalDateTime.now().minusYears(10);
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String email = user.getUsername();
        for (SystemEntity e : systemEntityRepository.findSystemEntitiesByOwner_Username(email)) {
            for (Reservation r : e.getReservations()) {
                if(r.getDateFrom().isBefore(now) && r.getDateFrom().isAfter(start)) {
                    String k = String.valueOf(r.getDateFrom().getYear());
                    for (ReservationsReportDTO report : dtos) {
                        if (report.getName().equals(k)) {
                            report.increaseAmount();
                        }
                    }

                }
            }
        }
        return dtos;
    }



    public ArrayList<ReservationsReportDTO> getReservationsAmountWeekly() {
        LocalDateTime start = LocalDateTime.now().minusWeeks(10);
        LocalDateTime now = LocalDateTime.now();
        ArrayList<ReservationsReportDTO> dtos = new ArrayList<>();
        UserDetails user = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String email = user.getUsername();
        while (!start.isAfter(now)){
            String k = String.valueOf(start.getDayOfMonth()) +" " + start.getMonth()+ " - " + String.valueOf(start.plusWeeks(1).getDayOfMonth()) +" " + start.plusWeeks(1).getMonth();
            int n =0;
            for (SystemEntity e : systemEntityRepository.findSystemEntitiesByOwner_Username(email)) {

                for (Reservation r : e.getReservations()) {
                    if (r.getDateFrom().isAfter(start) && r.getDateFrom().isBefore(start.plusWeeks(1))) {
                        n += 1;
                    }
                }
            }
            dtos.add(new ReservationsReportDTO(k, n));
            start =start.plusWeeks(1);
        }
        return dtos;
    }
    public VesselDTO getDetailVessel(int id) {
        return new VesselDTO(vesselRepository.findVesselById(id));
    }

    public AdventureDTO getDetailAdventures(int id) {
        return new AdventureDTO(adventureRepositry.findAdventureById(id));
    }


    public ListingDTO getDetailVacation(int id) {
        return new ListingDTO(vacationRepository.findVacationById(id));
    }


}
