package com.project.hotelreservationbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.hotelreservationbackend.entity.Taxi;

@Repository
public interface TaxiRepository extends JpaRepository<Taxi, Integer>{
	
	

}
