package com.project.hotelreservationbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.hotelreservationbackend.entity.ReservedRoom;
import com.project.hotelreservationbackend.repository.HotelStaffRepository;

@Service
public class HotelStaffService {
	
	@Autowired
	private HotelStaffRepository repository;
	

	public ReservedRoom saveReservation(ReservedRoom reservation) {
		
		return repository.save(reservation);
		
	}
    public List<ReservedRoom> saveReservations(List<ReservedRoom> reservation) {
		
		return repository.saveAll(reservation);
		
	}
	
    public List<ReservedRoom> getReservations(){
    	
    	return repository.findAll();
    }
    
    public ReservedRoom getReservationById(int id){
    	
    	return repository.findById(id).orElse(null);
    }
      
    public void deleteReservation(int id) {
    	
    	 repository.deleteById(id);
    	
    }
    
    public void saveOrUpdate(ReservedRoom books)   
    {  
    	repository.save(books);  
    } 
    

	
}
