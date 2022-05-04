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
    private Client client;
    private boolean isApproved;
}
