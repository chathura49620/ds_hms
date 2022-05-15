package com.project.hotelreservationbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "USER_TBL")
public class User {
	

	@Id
	@GeneratedValue
	private int id;
	private String fullName;
	private String country;
	private String email;
	private String contact;
	private String type;
	private String  password;
	
	public User() {}
	
	
	

	public User(int id, String fullName, String country, String email, String contact, String type, String password) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.country = country;
		this.email = email;
		this.contact = contact;
		this.type = type;
		this.password = password;
	}




	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}




	@Override
	public String toString() {
		return "User [id=" + id + ", fullName=" + fullName + ", country=" + country + ", email=" + email + ", contact="
				+ contact + ", type=" + type + ", password=" + password + "]";
	}
	
	
	

}
