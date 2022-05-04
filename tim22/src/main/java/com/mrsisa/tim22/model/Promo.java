package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Promo {
    @Id
    private Integer id;
    @Column
    private LocalDateTime dateFrom;
    @Column
    private LocalDateTime dateTo;
    @Column
    private String description;
    @ManyToOne(fetch= FetchType.EAGER)
    @JoinColumn(name="system_entity_id")
    private SystemEntity systemEntity;
    @Column
    private int numberOfPeople;
    @Column
    private double price;
}
