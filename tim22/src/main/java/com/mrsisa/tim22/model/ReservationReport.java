package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    @Entity
    public class ReservationReport {
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE)
        private Integer id;

        @Column
        private String text;
        @Column
        private boolean isAnswered;
        @Column
        private boolean automaticPenalty;
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name="client_id")
        private User client;
        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name="owner_id")
        private User owner;

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name="reservation")
        private Reservation reservation;






    }
