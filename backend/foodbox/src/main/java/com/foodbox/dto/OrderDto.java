package com.foodbox.dto;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;


public class OrderDto {
	
	
	private int id;
	private CustomerDto customer;
	private List<FoodItemDto> foodItems;
	private int totalAmount;
	private boolean orderStatus;
	
	public OrderDto() {}



	public OrderDto(int id, CustomerDto customer, List<FoodItemDto> foodItems, int totalAmount, boolean orderStatus) {
		super();
		this.id = id;
		this.customer = customer;
		this.foodItems = foodItems;
		this.totalAmount = totalAmount;
		this.orderStatus = orderStatus;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public CustomerDto getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerDto customer) {
		this.customer = customer;
	}

	public List<FoodItemDto> getFoodItems() {
		return foodItems;
	}

	public void setFoodItems(List<FoodItemDto> foodItems) {
		this.foodItems = foodItems;
	}

	public int getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(int totalAmount) {
		this.totalAmount = totalAmount;
	}

	public boolean isOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(boolean orderStatus) {
		this.orderStatus = orderStatus;
	}
	
	
}
