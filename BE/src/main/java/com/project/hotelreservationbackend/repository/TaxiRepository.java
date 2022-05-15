package com.csse.project.ticketingsystembackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.csse.project.ticketingsystembackend.entity.Taxi;

@Repository
public interface TaxiRepository extends JpaRepository<Taxi, Integer>{
	
	

}
