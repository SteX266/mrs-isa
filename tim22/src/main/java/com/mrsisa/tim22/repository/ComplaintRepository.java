package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;

public interface ComplaintRepository  extends JpaRepository<Complaint, Integer> {
    @Lock(LockModeType.PESSIMISTIC_READ)
    @Query("SELECT  c FROM  Complaint c where c.id=:id")
    @QueryHints({@QueryHint(name = "javax.persistence.lock.timeout", value = "1000")})
    public Complaint getLockedComplaint(int id);

    public Complaint findComplaintById(int id);
}
