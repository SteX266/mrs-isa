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
@Entity(name="user_table")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class User {
    @Id
    @SequenceGenerator(name = "userSequenceGenerator", sequenceName = "userIds", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSequenceGenerator")
    private Long id;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private String name;
    @Column
    private String surname;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="addres_id")
    private Address address;
    @Column
    private String phoneNumber;
    @Column
    private boolean isActivated;
    @Column
    private boolean isDeleted;
    @Column
    private int loyaltyPoints;
    @Column
    @Enumerated(EnumType.STRING)
    private UserType userType;
    @OneToMany(fetch=FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "user")
    private Set<AccountCancellationRequest> accountCancellationRequests = new HashSet<AccountCancellationRequest>();








}
