package com.mrsisa.tim22.service;

import com.mrsisa.tim22.model.Review;
import com.mrsisa.tim22.model.SystemEntity;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.repository.ReviewRepository;
import com.mrsisa.tim22.repository.SystemEntityRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    private SystemEntityRepository systemEntityRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    public void createPromoReservation(int entityId, String username, int score, String text) {
        User u = userRepository.findOneByUsername(username);
        SystemEntity e = systemEntityRepository.findOneById(entityId);

        Review review = new Review(score, text, u,e);
        reviewRepository.save(review);

    }
}
