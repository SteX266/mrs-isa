package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Address {
    @Id
    private Integer id;
    @Column
    private String city;
    @Column
    private String country;
    @Column
    private String streetName;
    @Column
    private int streetNumber;
    @OneToMany(fetch=FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "address")
    private Set<SystemEntity> systemEntities = new HashSet<>();




}
