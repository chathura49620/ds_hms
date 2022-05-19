package com.project.hotelreservationbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hotelreservationbackend.entity.Payment;


@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer>{



}
