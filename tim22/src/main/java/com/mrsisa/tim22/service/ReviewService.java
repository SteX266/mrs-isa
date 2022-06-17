package com.mrsisa.tim22.service;

import com.mrsisa.tim22.model.Reservation;
import com.mrsisa.tim22.model.Review;
import com.mrsisa.tim22.model.SystemEntity;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.repository.ReservationRepository;
import com.mrsisa.tim22.repository.ReviewRepository;
import com.mrsisa.tim22.repository.SystemEntityRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private SystemEntityRepository systemEntityRepository;


    public boolean createReview(int reservationId, String username, String text, int rating) {

        Reservation reservation = reservationRepository.findOneById(reservationId);
        User u = userRepository.findOneByUsername(username);
        SystemEntity e = reservation.getSystemEntity();

        System.out.println("Duzina: " + e.getComplaints().size() );
        for (Review r:e.getReviews()){
            if (r.getClient().getUsername().equals(username)){
                //TODO ODGOVOR NESTO NA FRONT
                return false;
            }
        }
        Review review = new Review(rating, text, u, reservation.getSystemEntity());
        reservation.getSystemEntity().addReview(review);
        SystemEntity entity = reservation.getSystemEntity();

        double avg = 0;

        for(Review r:entity.getReviews()){
            avg+=r.getScore();
        }

        entity.setAverageScore(avg/entity.getReviews().size());


        reviewRepository.save(review);
        systemEntityRepository.save(entity);
        return true;

    }
}
