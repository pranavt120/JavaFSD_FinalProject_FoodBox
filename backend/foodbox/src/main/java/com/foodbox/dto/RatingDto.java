package com.foodbox.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


public class RatingDto {
	

	private int id;
	private int score;
	private CustomerDto customer;
	private FoodItemDto foodItem;
	
	public RatingDto() {}

	

	public RatingDto(int id, int score, CustomerDto customer, FoodItemDto foodItem) {
		super();
		this.id = id;
		this.score = score;
		this.customer = customer;
		this.foodItem = foodItem;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public CustomerDto getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerDto customer) {
		this.customer = customer;
	}

	public FoodItemDto getFoodItem() {
		return foodItem;
	}

	public void setFoodItem(FoodItemDto foodItem) {
		this.foodItem = foodItem;
	}
	
	

}
