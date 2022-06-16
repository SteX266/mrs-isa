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

    @RequestMapping(value = "/createReview", method=RequestMethod.GET)
    public void createReview(@RequestParam int reservationId, @RequestParam String username, @RequestParam String text, @RequestParam int rating){
        reviewService.createReview(reservationId, username, text, rating);
    }

}
