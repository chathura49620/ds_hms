package com.project.hotelreservationbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "TAXI_TBL")
public class TaxiTbl {
	
	@Id
	@GeneratedValue
	private int id;
	private String vehicalNo;
	private String drivarName ;
	private String mobile;
	
	public TaxiTbl() {}

	public TaxiTbl(int id, String vehicalNo, String drivarName, String mobile) {
		super();
		this.id = id;
		this.vehicalNo = vehicalNo;
		this.drivarName = drivarName;
		this.mobile = mobile;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getVehicalNo() {
		return vehicalNo;
	}

	public void setVehicalNo(String vehicalNo) {
		this.vehicalNo = vehicalNo;
	}

	public String getDrivarName() {
		return drivarName;
	}

	public void setDrivarName(String drivarName) {
		this.drivarName = drivarName;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "TaxiTbl [id=" + id + ", vehicalNo=" + vehicalNo + ", drivarName=" + drivarName + ", mobile=" + mobile
				+ "]";
	}

	
	
	
	
	
	
	

}
