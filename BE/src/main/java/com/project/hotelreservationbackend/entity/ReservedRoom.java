package com.project.hotelreservationbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "RESERVED_ROOM_TBL")
public class ReservedRoom {
	
	@Id
	@GeneratedValue
	private int id;
	private String roomNo;
	private String type;
	private String customerName;
	private String customerId;
	private String startDate;
	private String endDate;
	private String paymentStatus;
	

	
	public ReservedRoom() {}



	public ReservedRoom(int id, String roomNo, String type, String customerName, String customerId, String startDate,
			String endDate, String paymentStatus) {
		super();
		this.id = id;
		this.roomNo = roomNo;
		this.type = type;
		this.customerName = customerName;
		this.customerId = customerId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.paymentStatus = paymentStatus;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getRoomNo() {
		return roomNo;
	}



	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}



	public String getType() {
		return type;
	}



	public void setType(String type) {
		this.type = type;
	}



	public String getCustomerName() {
		return customerName;
	}



	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}



	public String getCustomerId() {
		return customerId;
	}



	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}



	public String getStartDate() {
		return startDate;
	}



	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}



	public String getEndDate() {
		return endDate;
	}



	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}



	public String getPaymentStatus() {
		return paymentStatus;
	}



	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}



	@Override
	public String toString() {
		return "ReservedRoom [id=" + id + ", roomNo=" + roomNo + ", type=" + type + ", customerName=" + customerName
				+ ", customerId=" + customerId + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", paymentStatus=" + paymentStatus + "]";
	}



	
	
}
