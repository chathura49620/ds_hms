package com.project.hotelreservationbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.hotelreservationbackend.entity.TaxiTbl;

import com.project.hotelreservationbackend.service.TaxiManagementService;

@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "*")
@RestController
public class TaxiManagementController {
	
	@Autowired
	private TaxiManagementService service;
	
	//save
	@PostMapping("/addhoteltaxi")
	public TaxiTbl addTaxi(@RequestBody TaxiTbl taxi) {
		
		return service.saveTaxiDetails(taxi);
		
	}
	
	//get
	@GetMapping("/gettaxies")
	public List<TaxiTbl> findAllTaxies(){
		
		return service.getTaxiesDetails();
		
	}
	
	//update
		@PutMapping("/update/hoteltaxies")
		public void updateTaxies(@RequestBody TaxiTbl taxi) {
			
			service.saveOrUpdateTaxi(taxi);
			
		}
		
	//delete
		@DeleteMapping("/delete/hoteltaxies/{id}")
		public void  deleteHotelTaxies(@PathVariable int id) {
			
			 service.deleteHotelTaxi(id);
			
		}
	
}
