package com.project.hotelreservationbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hotelreservationbackend.entity.Product;




@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	Product findByName(String name);
	Product findByquantity(int quantity);
	
	
	

}
