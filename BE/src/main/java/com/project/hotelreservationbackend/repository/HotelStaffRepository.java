package com.csse.project.ticketingsystembackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.csse.project.ticketingsystembackend.entity.Reservation;


@Repository
public interface HotelStaffRepository extends JpaRepository<Reservation, Integer>{

	Reservation findByCustomerName(String name);
	Reservation findByRoomNo(String name);
	
	
	

}
