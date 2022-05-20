package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;

@NoArgsConstructor @AllArgsConstructor @Getter @Setter @Entity
public class AccountCancellationRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column
    private String text;
    @Column
    private boolean isApproved;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    public AccountCancellationRequest(String text, boolean isApproved, User u){
        this.text = text;
        this.isApproved = isApproved;
        this.user = u;
    }



}
