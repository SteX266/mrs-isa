package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoyaltyProgram {
    private int pointsPerReservation;
    private int pointsForBusiness;
    private int silverLimit;
    private int goldLimit;
    private int platinumLimit;


}
