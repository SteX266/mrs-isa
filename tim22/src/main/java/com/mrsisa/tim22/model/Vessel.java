package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Vessel extends SystemEntity {
    @Id
    private Integer id;

    @Column
    @Enumerated(EnumType.STRING)
    private VesselType vesselType;
    @Column
    private int engineNumber;
    @Column
    private int enginePower;
    @Column
    private int maxSpeed;
    @ElementCollection(targetClass=VesselEquipement.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name="vessel_equipement")
    @Column(name="ship_vessel_equipement")
    private List<VesselEquipement> vesselEquipement;
    @ElementCollection(targetClass=FishingEquipement.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name="fishing_equipement")
    @Column(name="ship_fishing_equipement")
    private List<FishingEquipement> fishingEquipement;

}
