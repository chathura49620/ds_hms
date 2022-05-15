package com.project.hotelreservationbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.hotelreservationbackend.entity.Room;
import com.project.hotelreservationbackend.repository.RoomRepository;


@Service
public class RoomService {
	
	@Autowired
	private RoomRepository repository;
	

    public Room saveRoom(Room room) {
		
		return repository.save(room);
		
	}
   
   public List<Room> getRooms(){
   	
   	return repository.findAll();
   }
   

}
