package com.mrsisa.tim22.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(name="user_table")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class User implements UserDetails {
    @Id
    @SequenceGenerator(name = "userSequenceGenerator", sequenceName = "userIds", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSequenceGenerator")
    private Long id;
    @Column
    private String username;
    @JsonIgnore
    @Column
    private String password;
    @Column(name="last_password_reset_date")
    private Timestamp lastPasswordResetDate;
    @Column
    private String name;
    @Column
    private String surname;
    @Column
    private String address;
    @Column
    private String phoneNumber;
    @Column
    private boolean isDeleted;
    @Column
    private boolean isEnabled;
    @Column
    private int loyaltyPoints;
    @Column
    @Enumerated(EnumType.STRING)
    private UserType userType;
    @OneToMany(fetch=FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "user")
    private Set<AccountCancellationRequest> accountCancellationRequests = new HashSet<AccountCancellationRequest>();
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    private List<Role> roles;




    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }
}
