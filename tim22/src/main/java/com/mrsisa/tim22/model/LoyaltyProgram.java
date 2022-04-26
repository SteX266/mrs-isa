package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class LoyaltyProgram {
    @Id
    private Integer id;
    @Column
    private int pointsPerReservation;
    @Column
    private int pointsForBusiness;
    @Column
    private int silverLimit;
    @Column
    private int goldLimit;
    @Column
    private int platinumLimit;


}
