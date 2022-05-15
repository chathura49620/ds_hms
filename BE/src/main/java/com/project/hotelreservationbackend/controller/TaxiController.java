package com.csse.project.ticketingsystembackend.controller;

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

import com.csse.project.ticketingsystembackend.entity.Product;
import com.csse.project.ticketingsystembackend.entity.Taxi;
import com.csse.project.ticketingsystembackend.service.TaxiService;

@RestController
public class TaxiController {
	
	@Autowired
	private TaxiService service;
	
	//save
	@PostMapping("/addtaxi")
	public Taxi addTaxi(@RequestBody Taxi taxi) {
		
		return service.saveTaxi(taxi);
		
	}
	
	//get
	@GetMapping("/taxies")
	public List<Taxi> findAllTaxies(){
		
		return service.getTaxies();
		
	}
	
	//update
		@PutMapping("/update/taxies")
		public Taxi updateTaxies(@RequestBody Taxi taxi) {
			
			return service.updateTaxies(taxi);
			
		}
		
	//delete
		@DeleteMapping("/delete/taxies/{id}")
		public String  deleteTaxi(@PathVariable int id) {
			
			return service.deleteTaxi(id);
			
		}
	/*
	 * @GetMapping("/taxiById/{id}") public Taxi findTaxiById(@PathVariable int id)
	 * {
	 * 
	 * return service.getTaxiById(id);
	 * 
	 * }
	 * 
	 * //update
	 * 
	 * @PutMapping("/update") public Taxi updateTaxi(@RequestBody Taxi taxi) {
	 * 
	 * return service.updateTaxi(taxi);
	 * 
	 * }
	 * 
	 * //Delete
	 * 
	 * @DeleteMapping("/delete/{id}") public String deleteTaxi(@PathVariable int id)
	 * {
	 * 
	 * return service.deleteTaxi(id);
	 * 
	 * }
	 */
}
