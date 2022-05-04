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
public class Review {
    @Id
    private Integer id;
    @Column
    private Integer score;
    @Column
    private String text;
    @Column
    private boolean isApproved;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="sender_id")
    private Client client;
    @ManyToOne
    @JoinColumn(name="system_entity_id")
    private SystemEntity systemEntity;
}
