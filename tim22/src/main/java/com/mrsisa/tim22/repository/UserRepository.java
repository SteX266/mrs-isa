package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.User;
import org.hibernate.cfg.JPAIndexHolder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    public User findOneById(String index);

    public Page<User> findAll(Pageable pageable);


}
