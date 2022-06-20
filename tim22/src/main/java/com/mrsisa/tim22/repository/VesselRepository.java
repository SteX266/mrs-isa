package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.Role;
import com.mrsisa.tim22.model.Vacation;
import com.mrsisa.tim22.model.Vessel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.List;

public interface VesselRepository extends JpaRepository<Vessel, Long> {
    public Vessel findVesselById(int id);

    @Lock(LockModeType.PESSIMISTIC_READ)
    @Query("SELECT v FROM Vessel v where v.id=:id")
    @QueryHints({@QueryHint(name = "javax.persistence.lock.timeout", value = "1000")})
    Vessel getLockedEntity(Integer id);


}
