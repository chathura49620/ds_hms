package com.project.hotelreservationbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hotelreservationbackend.entity.Reservation;


@Repository
public interface HotelStaffRepository extends JpaRepository<Reservation, Integer>{

	Reservation findByCustomerName(String name);
	Reservation findByRoomNo(String name);
	
	
	

}
