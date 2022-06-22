package com.mrsisa.tim22.service;

import com.mrsisa.tim22.dto.CancellationRequestDTO;
import com.mrsisa.tim22.model.AccountCancellationRequest;
import com.mrsisa.tim22.model.User;
import com.mrsisa.tim22.repository.AccountCancellationRequestRepository;
import com.mrsisa.tim22.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Service
public class AccountCancellationRequestService {

    @Autowired
    private AccountCancellationRequestRepository accountCancellationRequestRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    public void createNewCancellationRequest(String username, String text) {
        User u = userRepository.findOneByUsername(username);

        AccountCancellationRequest acr = new AccountCancellationRequest(text,false, u);

        accountCancellationRequestRepository.save(acr);


    }

    public  ArrayList<CancellationRequestDTO> getCancellationRequest() {
        ArrayList<CancellationRequestDTO> requests = new ArrayList<>();
        for (AccountCancellationRequest acr: accountCancellationRequestRepository.findAll()){
            if(!acr.isAnswered()) {
                requests.add(new CancellationRequestDTO(acr));
            }
        }
        return requests;
    }
    @Transactional
    public boolean acceptCancellationReques(CancellationRequestDTO dto) {
            User u =  userRepository.findOneByUsername(dto.getClient());

            if(u == null){
                return false;
            }
            System.out.println( u.getUsername());
             AccountCancellationRequest acr = accountCancellationRequestRepository.getLockedCancellationRequest(u.getUsername());
                if(!acr.isAnswered()){
                    acr.setAnswered(true);
                    accountCancellationRequestRepository.save(acr);
                    u.setDeleted(true);
                    u.setEnabled(false);
                    userRepository.save(u);
                    emailService.deleteRequestApprovedEmail(dto.getClient());
                }


            return true;

    }
    @Transactional
    public boolean declineCancellationRequest(CancellationRequestDTO dto) {
        User u =  userRepository.findOneByUsername(dto.getClient());

        if(u == null){
            return false;
        }
        AccountCancellationRequest acr  = accountCancellationRequestRepository.getLockedCancellationRequest(u.getUsername());
            if(!acr.isAnswered()) {
                acr.setAnswered(true);
                accountCancellationRequestRepository.save(acr);
                emailService.sendEmail(dto.getClient(),"Account Cancellation Request Declined",dto.getText());
        }
        return true;
    }
}
