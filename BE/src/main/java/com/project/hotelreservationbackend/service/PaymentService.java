package com.project.hotelreservationbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.hotelreservationbackend.entity.Payment;
import com.project.hotelreservationbackend.repository.PaymentRepository;

@Service
public class PaymentService {
	
	@Autowired
	private PaymentRepository repository;
	

	public Payment savePayment(Payment payment) {
		
		return repository.save(payment);
		
	}
    
	
    public List<Payment> getPayments(){
    	
    	return repository.findAll();
    }
    
    
   
	
}
