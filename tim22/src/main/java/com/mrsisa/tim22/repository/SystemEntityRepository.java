package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.SystemEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.List;

public interface SystemEntityRepository extends JpaRepository<SystemEntity, Integer> {
    public SystemEntity findOneById(Integer id);

    public ArrayList<SystemEntity> findSystemEntitiesByOwner_Username(String email);


    public Page<SystemEntity> findAll(Pageable pageable);

    @Query(value="select e from SystemEntity e where e.id >= ?1 and e.id <= ?2")
    public List<SystemEntity> entitiesBetweenIds(int startId, int endId);
}
