package com.mrsisa.tim22.dto;

import com.mrsisa.tim22.model.AvailabilityPeriod;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AvailabilityPeriodDTO {
    private LocalDateTime dateFrom;
    private LocalDateTime dateTo;

    public AvailabilityPeriodDTO(AvailabilityPeriod a){
        this.dateFrom = a.getDateFrom();
        this.dateTo =a.getDateTo();
    }
}
