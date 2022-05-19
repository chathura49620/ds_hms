package com.project.hotelreservationbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "ROOM_TBL")
public class Room {
	
	@Id
	@GeneratedValue
	private int id;
	private String roomNo;
	private String type;
	private String status;
	private double perHour;
	private double perDay;
	
	
	
	public Room() {}


	public Room(int id, String roomNo, String type, String status, double perHour, double perDay) {
		super();
		this.id = id;
		this.roomNo = roomNo;
		this.type = type;
		this.status = status;
		this.perHour = perHour;
		this.perDay = perDay;
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


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public double getPerHour() {
		return perHour;
	}


	public void setPerHour(double perHour) {
		this.perHour = perHour;
	}


	public double getPerDay() {
		return perDay;
	}


	public void setPerDay(double perDay) {
		this.perDay = perDay;
	}


	@Override
	public String toString() {
		return "Room [id=" + id + ", roomNo=" + roomNo + ", type=" + type + ", status=" + status + ", perHour="
				+ perHour + ", perDay=" + perDay + "]";
	}


	
	
}
