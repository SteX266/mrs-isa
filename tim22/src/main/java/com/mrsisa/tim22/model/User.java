package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {

    protected String email;
    protected String password;
    protected Role role;
    protected String name;
    protected String surname;
    protected Address address;
    protected String phoneNumber;
    protected boolean isActivated;
    protected boolean isDeleted;
    protected int loyaltyPoints;




}
