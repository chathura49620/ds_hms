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
	private int roomId;
	private String type;
	private String customerName;
	private int customerId;
	private String startDate;
	private String endDate;
	

	
	public ReservedRoom() {}



	public ReservedRoom(int id, int roomId, String type, String customerName, int customerId, String startDate,
			String endDate) {
		super();
		this.id = id;
		this.roomId = roomId;
		this.type = type;
		this.customerName = customerName;
		this.customerId = customerId;
		this.startDate = startDate;
		this.endDate = endDate;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public int getRoomId() {
		return roomId;
	}



	public void setRoomId(int roomId) {
		this.roomId = roomId;
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



	public int getCustomerId() {
		return customerId;
	}



	public void setCustomerId(int customerId) {
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



	@Override
	public String toString() {
		return "ReservedRoom [id=" + id + ", roomId=" + roomId + ", type=" + type + ", customerName=" + customerName
				+ ", customerId=" + customerId + ", startDate=" + startDate + ", endDate=" + endDate + "]";
	}



	
	

	

}
