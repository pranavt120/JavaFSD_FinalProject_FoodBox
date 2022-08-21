package com.foodbox.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class CustomerEntity {
	
	@Column(name = "customer_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "customer_first_name")
	private String firstName;
	
	@Column(name = "customer_last_name")
	private String lastName;
	
	@Column(name = "customer_email")
	private String email;
	
	@Column(name = "customer_phone")
	private String phone;
	
	@Column(name = "customer_username")
	private String userName;
	
	@Column(name = "customer_password")
	private String password;
	
	@OneToOne(mappedBy = "customer")
	private RatingEntity rating;
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	private List<OrderEntity> Order;
	
	public CustomerEntity() {}
	
	public CustomerEntity(int id, String firstName, String lastName, String email, String phone, String userName,
			String password) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.userName = userName;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	

}
