package com.project.hotelreservationbackend.entity;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "PAYMENT_TBL")
public class Payment {

	@Id
	@GeneratedValue
	private int id;
	private String customerName;
	private String cardNo;
	private String exp;
	private int reservationId;
	private double amount;
	
	public Payment() {}

	public Payment(int id, String customerName, String cardNo, String exp, int reservationId, double amount) {
		super();
		this.id = id;
		this.customerName = customerName;
		this.cardNo = cardNo;
		this.exp = exp;
		this.reservationId = reservationId;
		this.amount = amount;
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

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public String getExp() {
		return exp;
	}

	public void setExp(String exp) {
		this.exp = exp;
	}

	public int getReservationId() {
		return reservationId;
	}

	public void setReservationId(int reservationId) {
		this.reservationId = reservationId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "Payment [id=" + id + ", customerName=" + customerName + ", cardNo=" + cardNo + ", exp=" + exp
				+ ", reservationId=" + reservationId + ", amount=" + amount + "]";
	}
	
	
	
	
	
	
}


