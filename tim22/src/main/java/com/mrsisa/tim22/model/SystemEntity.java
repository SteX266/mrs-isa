package com.mrsisa.tim22.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class SystemEntity {

    @Id
    @SequenceGenerator(name = "entitySequenceGenerator", sequenceName = "entityIds", initialValue = 1, allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "entitySequenceGenerator")
    protected Integer id;
    @Column
    protected String name;
    @Column(length = 2000)
    protected String description;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="addres_id")
    protected Address address;
    @Column
    protected int capacity;

    @ElementCollection
    @CollectionTable(name="photos", joinColumns = @JoinColumn(name="entity_id"))
    @Column
    protected List<String> photos;
    @Column
    protected String rulesOfConduct;
    @ElementCollection(targetClass=Amenity.class)
    @Enumerated(EnumType.STRING)
    @CollectionTable(name="amenities")
    @Column(name="entity_amenities")
    protected List<Amenity> amenities;
    @Column
    protected boolean isDeleted;
    @OneToMany(mappedBy = "systemEntity", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    protected Set<Promo> promos = new HashSet<Promo>();
    @Column
    protected double cancellationFee;
    @Column
    protected double averageScore;
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "systemEntity")
    protected Set<Review> reviews = new HashSet<Review>();
    @ManyToMany(mappedBy = "subscribtions")
    protected Set<User> subscribers = new HashSet<>();

    @OneToMany(mappedBy = "systemEntity", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    protected Set<Complaint> complaints = new HashSet<Complaint>();

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "systemEntity")
    protected Set<AvailabilityPeriod> availabilityPeriod = new HashSet<AvailabilityPeriod>();
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "systemEntity")
    protected Set<Reservation> reservations = new HashSet<Reservation>();
    @Column
    protected double price;

    @Column
    @Enumerated(EnumType.STRING)
    protected SystemEntityType entityType;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_id")
    private User owner;

    public void addSubscriber(User u){
        this.subscribers.add(u);
    }

    public void removeSubscriber(User u) {
        this.subscribers.remove(u);
    }
}
