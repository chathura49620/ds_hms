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
	private double price;
	
	public Reservation() {}
	
	public Reservation(int id, String customerName, String roomNo, double price) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.roomNo = roomNo;
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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", customerName=" + customerName + ", roomNo=" + roomNo + ", price=" + price + "]";
	}
	
	
	
	
}


