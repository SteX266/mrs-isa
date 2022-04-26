package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Vessel extends Service{
    private VesselType vesselType;
    private int engineNumber;
    private int enginePower;
    private int maxSpeed;
    private List<VesselEquipement> vesselEquipement;
    private int capacity;
    private List<FishingEquipement> fishingEquipement;

}
