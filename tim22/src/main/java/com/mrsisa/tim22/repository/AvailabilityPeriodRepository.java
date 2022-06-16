package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.AvailabilityPeriod;
import com.mrsisa.tim22.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AvailabilityPeriodRepository extends JpaRepository<AvailabilityPeriod, Integer> {

    public List<AvailabilityPeriod> findAvailabilityPeriodBySystemEntity_Id(int id);
}

