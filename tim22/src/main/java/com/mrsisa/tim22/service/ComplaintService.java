package com.mrsisa.tim22.service;

import com.mrsisa.tim22.model.Complaint;
import com.mrsisa.tim22.model.Reservation;
import com.mrsisa.tim22.model.SystemEntity;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.repository.ComplaintRepository;
import com.mrsisa.tim22.repository.ReservationRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComplaintService {

    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private ComplaintRepository complaintRepository;
    @Autowired
    private UserRepository userRepository;
    public void createComplaint(String username, int reservationId, String text) {
        Reservation reservation = reservationRepository.findOneById(reservationId);
        User u = userRepository.findOneByUsername(username);
        SystemEntity e = reservation.getSystemEntity();
        Complaint complaint = new Complaint(text, u, reservation.getSystemEntity());
        e.addComplaint(complaint);
        complaintRepository.save(complaint);
    }
}
