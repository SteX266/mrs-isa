package com.mrsisa.tim22.repository;

import com.mrsisa.tim22.model.Adventure;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdventureRepository extends JpaRepository<Adventure, Long> {
    public Adventure findAdventureById(int id);


}
