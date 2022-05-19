package com.project.hotelreservationbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RESERVATION_TBL")
public class Reservation {

	@Id
	@GeneratedValue
	private int id;
	private String customerName;
	private String roomNo;
	private String paymentStatus;
	private double price;
	
	public Reservation() {}

	public Reservation(int id, String customerName, String roomNo, String paymentStatus, double price) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.roomNo = roomNo;
		this.paymentStatus = paymentStatus;
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getRoomNo() {
		return roomNo;
	}

	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Reservation [id=" + id + ", customerName=" + customerName + ", roomNo=" + roomNo + ", paymentStatus="
				+ paymentStatus + ", price=" + price + "]";
	}
	
	
	
	
	
	
}


