package com.mrsisa.tim22.dto;

import com.mrsisa.tim22.model.Address;
import com.mrsisa.tim22.model.Reservation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReservationDTO {
    public int id;
    public String location;
    public String startDate;
    public String endDate;
    public int visitors;
    public double fee;
    public String owner;
    public String client;
    public String status;
    public String entityName;
    public String entityType;


    public ReservationDTO(Reservation r) {
        String address = createAddressString(r.getSystemEntity().getAddress());
        String status = createStatusString(r.isCanceled(), r.isApproved());
        this.setId(r.getId());
        this.setLocation(address);
        this.setStartDate(String.valueOf(r.getDateFrom()));
        this.setEndDate(String.valueOf(r.getDateTo()));
        this.setVisitors(r.getSystemEntity().getCapacity());
        this.setFee(r.getSystemEntity().getPrice());
        this.setOwner(r.getSystemEntity().getOwner().getName() + " " + r.getSystemEntity().getOwner().getSurname());
        this.setClient(r.getClient().getName() + " " + r.getClient().getSurname());
        this.setStatus(status);
        this.setEntityName(r.getSystemEntity().getName());
        this.setEntityType(String.valueOf(r.getSystemEntity().getEntityType()));

    }


    private String createStatusString(boolean canceled, boolean isApproved) {
        if (canceled){
            return "CANCELED";
        }
        else if(isApproved){
            return "APPROVED";
        }
        else{
            return "WAITING";
        }
    }

    private String createAddressString(Address address) {
        String addressString = "";
        addressString += address.getStreetName();
        addressString += " ";
        addressString += String.valueOf(address.getStreetNumber());
        addressString += ", ";
        addressString += address.getCity();
        addressString += ", ";
        addressString += address.getCountry();
        return addressString;
    }
}
