package com.mrsisa.tim22.service;

import com.mrsisa.tim22.model.AccountCancellationRequest;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.repository.AccountCancellationRequestRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountCancellationRequestService {

    @Autowired
    private AccountCancellationRequestRepository accountCancellationRequestRepository;

    @Autowired
    private UserRepository userRepository;

    public void createNewCancellationRequest(String username, String text) {
        User u = userRepository.findOneByUsername(username);

        AccountCancellationRequest acr = new AccountCancellationRequest(text,false, u);

        accountCancellationRequestRepository.save(acr);


    }
}
