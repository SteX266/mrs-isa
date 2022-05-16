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
public class Complaint {

    @Id
    private Integer id;
    @Column
    private String text;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="sender_id")
    private User sender;
    @ManyToOne
    @JoinColumn(name="system_entity_id")
    private SystemEntity systemEntity;
    @Column
    private String responseText;

}
