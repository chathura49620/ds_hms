package com.project.hotelreservationbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.hotelreservationbackend.entity.TaxiTbl;

@Repository
public interface TaxiManagementRepository extends JpaRepository<TaxiTbl, Integer>{
	
	

}
