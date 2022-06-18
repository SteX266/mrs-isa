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
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private LocalDateTime dateFrom;
    @Column
    private LocalDateTime dateTo;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="system_entity_id")
    private SystemEntity systemEntity;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "client_id")
    private User client;
    @Column
    private boolean isApproved;
    @Column
    private boolean isCanceled;

    

    public Reservation(Promo p, User u){
        this.dateFrom = p.getDateFrom();
        this.dateTo = p.getDateTo();
        this.systemEntity = p.getSystemEntity();
        this.client = u;
        this.isApproved = true;
        this.isCanceled = false;
    }

}
