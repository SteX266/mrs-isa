package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.SystemEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SystemEntityRepository extends JpaRepository<SystemEntity, Integer> {
    public SystemEntity findOneById(Integer id);


    public Page<SystemEntity> findAll(Pageable pageable);
}
