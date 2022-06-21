package com.mrsisa.tim22.controller;

import com.mrsisa.tim22.dto.*;
import com.mrsisa.tim22.model.Utility;
import com.mrsisa.tim22.service.SystemEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/entity", produces = MediaType.APPLICATION_JSON_VALUE)
public class SystemEntityController {

    @Autowired
    private SystemEntityService systemEntityService;

    @RequestMapping(value = "/getAllEntities", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<SystemEntityDTO>> getAllEntitites(){

        return new ResponseEntity<ArrayList<SystemEntityDTO>>(systemEntityService.getEntities(1,3), HttpStatus.OK);
    }

    @RequestMapping(value ="getEntityById", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SystemEntityDTO> getEntityById(@RequestParam int id){
        return new ResponseEntity<SystemEntityDTO>(systemEntityService.getEntityById(id), HttpStatus.OK);
    }


    @RequestMapping(value ="/search", method=RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SystemEntityDTO> search(@RequestBody SearchDTO searchDTO){
        System.out.println(searchDTO.getSearchField());
        return new ResponseEntity<SystemEntityDTO>(new SystemEntityDTO(), HttpStatus.OK);
    }



    @RequestMapping(value ="getCurrentUserEntities", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<SystemEntityDTO>> getCurrentUserEntities(){


        return new ResponseEntity<ArrayList<SystemEntityDTO>>(systemEntityService.getCurrentUserEntities(), HttpStatus.OK);
    }
    @RequestMapping(value = "/getEntityAvailabilityPeriods", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ArrayList<AvailabilityPeriodDTO>> getEntityAvailabilityPeriods(@RequestParam int id){
        return new ResponseEntity<ArrayList<AvailabilityPeriodDTO>>(systemEntityService.getEntityAvailabilityPeriods(id), HttpStatus.OK);
    }

    @RequestMapping(value ="createSubscription", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void createSubscription(@RequestParam String username, @RequestParam int entityId){
        systemEntityService.createSubscribtion(entityId, username);
    }

    @RequestMapping(value ="unsubscribe", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public void unsubscribe(@RequestParam String username, @RequestParam int entityId){
        systemEntityService.unsubscribe(entityId, username);
    }
    @RequestMapping(value ="getDetailVessel", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<VesselDTO> getDetailVessel(@RequestParam int id){
        return new ResponseEntity<>(systemEntityService.getDetailVessel(id), HttpStatus.OK);
    }

    @RequestMapping(value ="getAverageRating", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public double getAverageRating(){
        return systemEntityService.getAverageRating();
    }
    @RequestMapping(value ="getBestRated", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<SystemEntityDTO> getBestRated(){
        return new ResponseEntity<SystemEntityDTO>(systemEntityService.getBestRated(), HttpStatus.OK);
    }
    @RequestMapping(value ="getDetailAdventure", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AdventureDTO> getDetailAdventure(@RequestParam int id){
        return new ResponseEntity<>(systemEntityService.getDetailAdventures(id), HttpStatus.OK);
    }
    @RequestMapping(value ="getDetailVacation", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ListingDTO> getDetailVacation(@RequestParam int id){
        return new ResponseEntity<>(systemEntityService.getDetailVacation(id), HttpStatus.OK);
    }

    @RequestMapping(value ="getWorstRated", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<SystemEntityDTO> getWorstRated(){
        return new ResponseEntity<SystemEntityDTO>(systemEntityService.getWorstRated(), HttpStatus.OK);
    }

    @RequestMapping(value ="getReservationsAmountMonthly", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<ArrayList<ReservationsReportDTO>> getReservationsAmountMonthly(){
        return new ResponseEntity<>(systemEntityService.getReservationsAmountMonthly(), HttpStatus.OK);
    }
    @RequestMapping(value ="getReservationsAmountYearly", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<ArrayList<ReservationsReportDTO>> getReservationsAmountYearly(){
        return new ResponseEntity<>(systemEntityService.getReservationsAmountYearly(), HttpStatus.OK);
    }
    @RequestMapping(value ="getReservationsAmountWeekly", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<ArrayList<ReservationsReportDTO>> getReservationsAmountWeekly(){
        return new ResponseEntity<>(systemEntityService.getReservationsAmountWeekly(), HttpStatus.OK);
    }

    // CREATE AND EDIT VESSEL

    @PostMapping("/createVessel")
    public ResponseEntity<String> createVessel(@RequestBody VesselDTO vesselDTO) {
        if(systemEntityService.saveVessel(vesselDTO)) {
            return new ResponseEntity<>("Successfully created vessel.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't create vessel.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteVessel")
    public ResponseEntity<String> deleteVessel(@RequestParam Integer id) {
        if(systemEntityService.deleteEntity(id)) {
            return new ResponseEntity<>("Successfully deleted vessel.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't delete vessel.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // CREATE AND EDIT LISTING

    @PostMapping("/createListing")
    public ResponseEntity<String> createListing(@RequestBody ListingDTO listingDTO) {
        if(systemEntityService.saveListing(listingDTO)) {
            return new ResponseEntity<>("Successfully created listing.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't create listing.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteListing")
    public ResponseEntity<String> deleteListing(@RequestParam Integer id) {
        if(systemEntityService.deleteEntity(id)) {
            return new ResponseEntity<>("Successfully deleted listing.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't delete listing.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // CREATE AND EDIT ADVENTURE

    @PostMapping("/createAdventure")
    public ResponseEntity<String> createAdventure(@RequestBody AdventureDTO adventureDTO) {
        if(systemEntityService.saveAdventure(adventureDTO)) {
            return new ResponseEntity<>("Successfully created listing.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't create listing.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteAdventure")
    public ResponseEntity<String> deleteAdventure(@RequestParam Long id) {
        if(systemEntityService.deleteAdventure(id)) {
            return new ResponseEntity<>("Successfully deleted adventure.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't delete adventure.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //  HERE LIES THE EDIT

    @PostMapping("/editGeneral")
    public ResponseEntity<String> editGeneral(@RequestBody GeneralDTO generalDTO) {
        if(systemEntityService.editGeneral(generalDTO)) {
            return new ResponseEntity<>("Successfully edited general information.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't edited general information.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/editAmenities")
    public ResponseEntity<String> editAmenities(@RequestBody AmenitiesDTO amenitiesDTO) {
        if(systemEntityService.editAmenities(amenitiesDTO)) {
            return new ResponseEntity<>("Successfully edited amenities.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't edit amenities.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/editAvailabilityPeriod")
    public ResponseEntity<String> editAvailabilityPeriod(@RequestBody PeriodsDTO periodsDTO) {
        if(systemEntityService.editAvailabilityPeriod(periodsDTO)) {
            return new ResponseEntity<>("Successfully edited availability period.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't edited availability period.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/editAddress")
    public ResponseEntity<String> editAddress(@RequestBody AddressDTO addressDTO) {
        if(systemEntityService.editAddress(addressDTO)) {
            return new ResponseEntity<>("Successfully edited address.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't edited address.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/editVesselDetails")
    public ResponseEntity<String> editVesselDetails(@RequestBody VesselDetailsDTO detailsDTO) {
        if(systemEntityService.editVesselDetails(detailsDTO)) {
            return new ResponseEntity<>("Successfully edited details.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Couldn't edited details.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // HERE LIE THE AMENITY LISTS

    @GetMapping("/getVesselUtilities")
    public ResponseEntity<List<Utility>> getVesselUtilities() {
        List<Utility> utilities = new ArrayList<Utility>(Arrays.asList(Utility.AC, Utility.FIRST_AID_KIT, Utility.FISHING_NET, Utility.FISHING_POLES, Utility.FRIDGE, Utility.GPS, Utility.PET_FRIENDLY, Utility.SONAR));

        return new ResponseEntity<List<Utility>>(utilities, HttpStatus.OK);
    }
    @GetMapping("/getAdventureUtilities")
    public ResponseEntity<List<Utility>> getAdventureUtilities() {
        List<Utility> utilities = new ArrayList<Utility>(Arrays.asList(Utility.FIRST_AID_KIT, Utility.FISHING_NET, Utility.FISHING_POLES, Utility.GPS, Utility.PET_FRIENDLY));

        return new ResponseEntity<List<Utility>>(utilities, HttpStatus.OK);
    }
    @GetMapping("/getListingUtilities")
    public ResponseEntity<List<Utility>> getListingUtilities() {
        List<Utility> utilities = new ArrayList<Utility>(Arrays.asList(Utility.AC, Utility.TV, Utility.FRIDGE, Utility.BBQ, Utility.GYM, Utility.KITCHEN, Utility.HEATING, Utility.WASHER, Utility.WIFI, Utility.PET_FRIENDLY));

        return new ResponseEntity<List<Utility>>(utilities, HttpStatus.OK);
    }
    @RequestMapping(value ="getRevenueReportData", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<ArrayList<RevenurReportDTO>> getRevenueReportData(@RequestParam String startDate,@RequestParam String endDate){
        return new ResponseEntity<>(systemEntityService.getRevenueReportData(startDate,endDate), HttpStatus.OK);
    }
    @RequestMapping(value ="getRevenueReportDataAdmin", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<ArrayList<RevenurReportDTO>> getRevenueReportDataAdmin(@RequestParam String startDate,@RequestParam String endDate){
        return new ResponseEntity<>(systemEntityService.getRevenueReportDataAdmin(startDate,endDate), HttpStatus.OK);
    }

}
