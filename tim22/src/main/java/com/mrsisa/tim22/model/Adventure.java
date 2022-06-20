package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Adventure extends SystemEntity {
    @Id
    private Integer id;
    @ElementCollection(targetClass=FishingEquipement.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name="fishing_equipement")
    @Column(name="adventure_equipement")
    private Set<FishingEquipement> equipement;


}
