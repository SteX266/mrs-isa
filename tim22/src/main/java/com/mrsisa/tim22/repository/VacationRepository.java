package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.Vacation;
import com.mrsisa.tim22.model.Vessel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VacationRepository extends JpaRepository<Vacation, Long> {
    public Vacation findVacationById(int id);


}
