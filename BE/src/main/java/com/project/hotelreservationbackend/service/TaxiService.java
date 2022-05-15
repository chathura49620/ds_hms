package com.csse.project.ticketingsystembackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csse.project.ticketingsystembackend.entity.Product;
import com.csse.project.ticketingsystembackend.entity.Taxi;
import com.csse.project.ticketingsystembackend.repository.TaxiRepository;

@Service
public class TaxiService {

	
	@Autowired
	private TaxiRepository repository;
	
   //save
    public Taxi saveTaxi(Taxi taxi) {
		
		return repository.save(taxi);
		
	}
   
    //get 
   public List<Taxi> getTaxies(){
   	
   	return repository.findAll();
   }
   
   //delete
   public String deleteTaxi(int id) {
   	
  	 repository.deleteById(id);;
  	 return "Taxie removed !!" + id;
  }
  
   public Taxi updateTaxies(Taxi taxi) {
   	
	   Taxi existingProduct = repository.findById(taxi.getId()).orElse(null);
   	existingProduct.setCustomerName(taxi.getCustomerName());
   	existingProduct.setPlace(taxi.getPlace());
   	existingProduct.setMobile(taxi.getMobile());
   	
   	return repository.save(existingProduct);
   	
   }
	/*
	 * public Taxi getTaxiById(int id){
	 * 
	 * return repository.findById(id).orElse(null); }
	 * 
	 * //update public Taxi updateTaxi(Taxi taxi) {
	 * 
	 * Taxi existingTaxi = repository.findById(taxi.getId()).orElse(null);
	 * existingTaxi.setCustomerName(taxi.getCustomerName());
	 * existingTaxi.setPlace(taxi.getPlace());
	 * existingTaxi.setMobile(taxi.getMobile());
	 * 
	 * return repository.save(existingTaxi);
	 * 
	 * }
	 * 
	 * //delete public String deleteTaxi(int id) {
	 * 
	 * repository.deleteById(id); return "Taxi Cancled !!" + id; }
	 */
}
