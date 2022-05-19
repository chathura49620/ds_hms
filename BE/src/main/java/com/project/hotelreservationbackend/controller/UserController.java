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
import com.project.hotelreservationbackend.entity.User;
import com.project.hotelreservationbackend.service.UserService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {
	

	@Autowired
	private UserService service;
	
	@PostMapping("/adduser")
	public User addUser(@RequestBody User user) {
		
		return service.saveUser(user);
		
	}
	

	@GetMapping("/users")
	public List<User> findAllUsers(){
		
		return service.getUsers();
		
	}
	
	
	
	@GetMapping("/userById/{id}")
	public User findUserById(@PathVariable int id) {
		
		return service.getUserById(id);
		
	}
	
	@GetMapping("/userByEmail/{email}")
	public User findUserByEmail(@PathVariable String email) {
		
		
	 return service.getUserByEmail(email);
	
		
	}
	
	

	@DeleteMapping("/delete/user/{id}")
	public String  deleteUser(@PathVariable int id) {
		
		return service.deleteUser(id);
		
	}


}
