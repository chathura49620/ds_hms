package com.project.hotelreservationbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.hotelreservationbackend.entity.Product;
import com.project.hotelreservationbackend.entity.User;
import com.project.hotelreservationbackend.repository.UserRepository;


@Service
public class UserService {
	
	
	@Autowired
	private UserRepository repository;
	

    public User saveUser(User user) {
		
		return repository.save(user);
		
	}
   
   public List<User> getUsers(){
   	
   	return repository.findAll();
   }
   
   public User getUserById(int id){
   	
   	return repository.findById(id).orElse(null);
   }
   
   public User getUserByEmail(String email){
   	
   	return repository.findByEmail(email);
   }
   
   
   
   public String deleteUser(int id) {
   	
  	 repository.deleteById(id);
  	 return "User removed !!" + id;
  }
  
 
   
	
   
	
	

}
