package com.project.hotelreservationbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.hotelreservationbackend.entity.Product;
import com.project.hotelreservationbackend.entity.ReservedRoom;
import com.project.hotelreservationbackend.repository.ReservedRoomRepository;


@Service
public class ReservedRoomService {
	
	
	@Autowired
	private ReservedRoomRepository repository;
	

    public ReservedRoom saveReservedRoom(ReservedRoom reservedroom) {
		
		return repository.save(reservedroom);
		
	}
   
   public List<ReservedRoom> getReservedRooms(){
   	
   	return repository.findAll();
   }
   
   public List<ReservedRoom> getReservedRoomsByName(String customerName){
   	
   	return repository.findByCustomerName(customerName);
   }
    
   
   public String deleteReserved(int id) {
	   	
	  	 repository.deleteById(id);
	  	 return "Reserved Room removed !!" + id;
	  }
	  
   
   public ReservedRoom updateReserved(ReservedRoom reservedRoom) {
   	
	ReservedRoom existingReserved = repository.findById(reservedRoom.getId()).orElse(null);
	existingReserved.setRoomId(reservedRoom.getRoomId());
	existingReserved.setType(reservedRoom.getType());
	existingReserved.setCustomerName(reservedRoom.getCustomerName());
	existingReserved.setCustomerId(reservedRoom.getCustomerId());
	existingReserved.setStartDate(reservedRoom.getStartDate());
	existingReserved.setEndDate(reservedRoom.getEndDate());
   	
   	return repository.save(existingReserved);
   	
   }
   
	

}
