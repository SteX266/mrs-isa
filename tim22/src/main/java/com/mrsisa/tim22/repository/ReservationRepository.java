package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    @Query(value="select r from Reservation r where r.client.id = ?1")
    List<Reservation> findByClient(int id);
}
