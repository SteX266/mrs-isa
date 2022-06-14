package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"}, allowedHeaders = "*")
@RequestMapping(value = "/review", produces = MediaType.APPLICATION_JSON_VALUE)
public class ReviewController {



    @Autowired
    private ReviewService reviewService;

    @RequestMapping(value = "/createReview", method= RequestMethod.GET)
    public void createPromoReservation(@RequestParam int entityId, @RequestParam String username, @RequestParam int score, @RequestParam String text){
        reviewService.createPromoReservation(entityId, username, score, text);
    }

}
