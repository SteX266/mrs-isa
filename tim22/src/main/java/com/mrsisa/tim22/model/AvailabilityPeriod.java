package com.mrsisa.tim22.model;

import java.time.LocalDateTime;

public class AvailabilityPeriod {

    private int id;
    private LocalDateTime dateFrom;
    private LocalDateTime dateTo;
    private Service service;

    public AvailabilityPeriod(LocalDateTime dateFrom, LocalDateTime dateTo) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
    }

    public AvailabilityPeriod() {
    }


}
