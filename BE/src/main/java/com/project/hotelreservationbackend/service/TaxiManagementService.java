package com.project.hotelreservationbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.hotelreservationbackend.entity.TaxiTbl;
import com.project.hotelreservationbackend.repository.TaxiManagementRepository;

@Service
public class TaxiManagementService {

	
	@Autowired
	private TaxiManagementRepository repository;
	
   //save
    public TaxiTbl saveTaxiDetails(TaxiTbl taxi) {
		
		return repository.save(taxi);
		
	}
   
   public List<TaxiTbl> getTaxiesDetails(){
   	
   	return repository.findAll();
   }
   
   public void deleteHotelTaxi(int id) {
   	
  	 repository.deleteById(id);
  	
  }
  
  public void saveOrUpdateTaxi(TaxiTbl books)   
  {  
  	repository.save(books);  
  }
  
 
}
