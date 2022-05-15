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

import com.project.hotelreservationbackend.entity.Room;
import com.project.hotelreservationbackend.service.RoomService;


@RestController
public class RoomController {
	
	
	@Autowired
	private RoomService service;
	
	@PostMapping("/addRoom")
	public Room addTaxi(@RequestBody Room room) {
		
		return service.saveRoom(room);
		
	}
	

	@GetMapping("/rooms")
	public List<Room> findAllTaxies(){
		
		return service.getRooms();
		
	}

}
