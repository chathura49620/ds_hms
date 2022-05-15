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

import com.project.hotelreservationbackend.entity.Product;
import com.project.hotelreservationbackend.entity.ReservedRoom;
import com.project.hotelreservationbackend.service.ReservedRoomService;


@RestController
public class ReservedRoomController {
	
	
	
	@Autowired
	private ReservedRoomService service;
	
	@PostMapping("/addReservedRoom")
	public ReservedRoom addTaxi(@RequestBody ReservedRoom reservedroom) {
		
		return service.saveReservedRoom(reservedroom);
		
	}
	

	@GetMapping("/reservedRooms")
	public List<ReservedRoom> findAllTaxies(){
		
		return service.getReservedRooms();
		
	}
	
	@GetMapping("/reservedRoomsByCustomer/{name}")
    public List<ReservedRoom> findProductByName(@PathVariable String name) {
		
		return service.getReservedRoomsByName(name);
		
	}
	
	@PutMapping("/update/reserved")
	public ReservedRoom updateReservedDetails(@RequestBody ReservedRoom reservedRoom) {
		
		return service.updateReserved(reservedRoom);
		
	}
	
	@DeleteMapping("/delete/reserved/{id}")
	public String  deleteReservedRoom(@PathVariable int id) {
		
		return service.deleteReserved(id);
		
	}
	

	


}
