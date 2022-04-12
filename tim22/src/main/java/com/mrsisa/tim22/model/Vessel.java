package com.mrsisa.tim22.model;

import java.util.List;

public class Vessel extends Service{
    private VesselType vesselType;
    private int engineNumber;
    private int enginePower;
    private int maxSpeed;
    private List<VesselEquipement> vesselEquipement;
    private int capacity;
    private List<FishingEquipement> fishingEquipement;

}
