package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.AccountCancellationRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface AccountCancellationRequestRepository extends JpaRepository<AccountCancellationRequest, Integer> {
    public ArrayList<AccountCancellationRequest> findAccountCancellationRequestsByUser_Username(String username);
}
