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

import com.csse.project.ticketingsystembackend.entity.Reservation;
import com.csse.project.ticketingsystembackend.service.HotelStaffService;

@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "*")
@RestController
public class HotelStaffController {
	
	@Autowired
	private HotelStaffService service;
	
	
	
	@PostMapping("/addReservation")
	public Reservation addReservation(@RequestBody Reservation reservation) {
		
		return service.saveReservation(reservation);
		
	}
	
	
	@PostMapping("/addReservations")
    public Reservation addReservations(@RequestBody Reservation reservations) {
		
		return service.saveReservation(reservations);
		
	}
	
	
	@GetMapping("/reservations")
	public List<Reservation> findAllProducts(){
		
		return service.getReservations();
		
	}
	
	
	@GetMapping("/reservationsById/{id}")
	public Reservation findProductById(@PathVariable int id) {
		
		return service.getReservationById(id);
		
	}
	
	

	
	@PutMapping("/updateReservation")  
	private Reservation update(@RequestBody Reservation reservation)   
	{  
		service.saveOrUpdate(reservation);  
		return reservation;  
	} 
	
	
	@DeleteMapping("/deleteReservation/{id}")
	public void  deleteReservation(@PathVariable("id") int id) {
		
		service.deleteReservation(id);
		
	}
	
}
