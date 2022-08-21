package com.foodbox.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "rating")
public class RatingEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="rating_id")
	private int id;
	
	@Column(name="rating_score")
	private int score;
	
	@OneToOne
	@JoinColumn(name="customer_id", referencedColumnName = "customer_id" )
	private CustomerEntity customer;
	
	@OneToOne
	@JoinColumn(name="foodItem_id" , referencedColumnName = "food_id")
	private FoodItemEntity foodItem;
	
	public RatingEntity() {}

	public RatingEntity(int id, int score, CustomerEntity customer, FoodItemEntity foodItem) {
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

	public CustomerEntity getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerEntity customer) {
		this.customer = customer;
	}

	public FoodItemEntity getFoodItem() {
		return foodItem;
	}

	public void setFoodItem(FoodItemEntity foodItem) {
		this.foodItem = foodItem;
	}
	
	

}
