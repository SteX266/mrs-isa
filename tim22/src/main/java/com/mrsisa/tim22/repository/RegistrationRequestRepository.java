package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.Promo;
import com.mrsisa.tim22.model.RegistrationRequest;
import com.mrsisa.tim22.model.Reservation;
import com.mrsisa.tim22.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;

public interface RegistrationRequestRepository extends JpaRepository<RegistrationRequest, Integer> {
    public ArrayList<RegistrationRequest> findRegistrationRequestsByClient(User u);
}