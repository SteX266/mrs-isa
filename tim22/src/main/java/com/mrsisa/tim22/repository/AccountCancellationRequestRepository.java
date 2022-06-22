package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.AccountCancellationRequest;
import com.mrsisa.tim22.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;

import javax.persistence.LockModeType;
import javax.persistence.QueryHint;
import java.util.ArrayList;
import java.util.List;

public interface AccountCancellationRequestRepository extends JpaRepository<AccountCancellationRequest, Integer> {
    public List<AccountCancellationRequest> findAccountCancellationRequestByUserUsername(String username);

    @Lock(LockModeType.PESSIMISTIC_READ)
    @Query("SELECT  a FROM  AccountCancellationRequest a where a.user.username=:username")
    @QueryHints({@QueryHint(name = "javax.persistence.lock.timeout", value = "1000")})
    public AccountCancellationRequest getLockedCancellationRequest(String username);
}
