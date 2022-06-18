package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.Role;
import com.mrsisa.tim22.model.Vessel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VesselRepository extends JpaRepository<Vessel, Long> {
    public Vessel findVesselById(int id);


}