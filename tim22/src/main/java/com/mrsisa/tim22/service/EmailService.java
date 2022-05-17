package com.mrsisa.tim22.service;

import com.mrsisa.tim22.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;


    public void sendActivationEmail(User user){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("nekirandommail2566@gmail.com");
        message.setTo(user.getUsername());
        message.setSubject("Fish'n'ships actiovation email");
        String text = "Confirm your email: http://localhost:8080/auth/activate/" + user.getId().toString();
        message.setText(text);
        emailSender.send(message);

        System.out.println("POSLAT EMAIL");
    }

}
