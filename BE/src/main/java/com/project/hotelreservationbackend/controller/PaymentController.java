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

import com.project.hotelreservationbackend.entity.Payment;
import com.project.hotelreservationbackend.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "*")
@RestController
public class PaymentController {
	
	@Autowired
	private PaymentService service;
	
	
	
	@PostMapping("/addPaymentDetails")
	public Payment addReservation(@RequestBody Payment payment) {
		
		return service.savePayment(payment);
		
	}
		
	@GetMapping("/payments")
	public List<Payment> findAllPayment(){
		
		return service.getPayments();
		
	}
	
}
