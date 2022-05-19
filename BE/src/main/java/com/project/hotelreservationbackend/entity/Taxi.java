package com.project.hotelreservationbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "RESERVED_TAXI_TBL")
public class Taxi {
	
	@Id
	@GeneratedValue
	private int id;
	private String customerName;
	private String place ;
	private String mobile;
	private String vehicalNo;
	
	public Taxi() {}

	public Taxi(int id, String customerName, String place, String mobile, String vehicalNo) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.place = place;
		this.mobile = mobile;
		this.vehicalNo = vehicalNo;
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

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getVehicalNo() {
		return vehicalNo;
	}

	public void setVehicalNo(String vehicalNo) {
		this.vehicalNo = vehicalNo;
	}

	@Override
	public String toString() {
		return "Taxi [id=" + id + ", customerName=" + customerName + ", place=" + place + ", mobile=" + mobile
				+ ", vehicalNo=" + vehicalNo + "]";
	}


}
