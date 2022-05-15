package com.project.hotelreservationbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hotelreservationbackend.entity.ReservedRoom;

@Repository
public interface ReservedRoomRepository extends JpaRepository<ReservedRoom, Integer>{
	
	List<ReservedRoom> findByCustomerName(String customerName);

}
