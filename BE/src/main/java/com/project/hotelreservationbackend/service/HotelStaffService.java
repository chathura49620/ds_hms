package com.csse.project.ticketingsystembackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csse.project.ticketingsystembackend.entity.Reservation;
import com.csse.project.ticketingsystembackend.repository.HotelStaffRepository;

@Service
public class HotelStaffService {
	
	@Autowired
	private HotelStaffRepository repository;
	

	public Reservation saveReservation(Reservation reservation) {
		
		return repository.save(reservation);
		
	}
    public List<Reservation> saveReservations(List<Reservation> reservation) {
		
		return repository.saveAll(reservation);
		
	}
	
    public List<Reservation> getReservations(){
    	
    	return repository.findAll();
    }
    
    public Reservation getReservationById(int id){
    	
    	return repository.findById(id).orElse(null);
    }
      
    public void deleteReservation(int id) {
    	
    	 repository.deleteById(id);
    	
    }
    
    public void saveOrUpdate(Reservation books)   
    {  
    	repository.save(books);  
    } 
    
//    public Reservation updateReservation(Reservation reservation) {
//    	
//    	Reservation existingReservation = repository.findById(reservation.getId()).orElse(null);
//    	existingReservation.setCustomerName(reservation.getCustomerName());
//    	existingReservation.setRoomNo(reservation.getRoomNo());
//    	existingReservation.setPrice(reservation.getPrice());
//    	
//    	return repository.save(existingReservation);
//    	
//    }
	
}
