package com.mrsisa.tim22.model;

import java.time.LocalDateTime;

public class Reservation {
    private LocalDateTime dateFrom;
    private LocalDateTime dateTo;
    private Service service;
    private Client customer;
    private boolean isApproved;
}
