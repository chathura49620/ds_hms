package com.project.hotelreservationbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hotelreservationbackend.entity.ReservedRoom;


@Repository
public interface HotelStaffRepository extends JpaRepository<ReservedRoom, Integer>{

	ReservedRoom findByCustomerName(String name);
	ReservedRoom findByRoomNo(String name);
	
	
	

}
