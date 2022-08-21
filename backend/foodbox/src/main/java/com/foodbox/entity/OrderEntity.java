package com.foodbox.entity;

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

 enum OrderStatus {
	 Fail,
	 Success
 }

@Entity
@Table(name = "orders")
public class OrderEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="orders_id")
	private int id;
	
	@ManyToOne
	@JoinColumn(name="customer_orders", referencedColumnName = "customer_id")
	private CustomerEntity customer;
	
	@ElementCollection
	@CollectionTable(name = "order_history", joinColumns = @JoinColumn(name = "order_id"))
	@Column(name="foodItems")
	private List<FoodItemEntity> foodItems;

	@Column(name="orders_amount")
	private int totalAmount;
	
	@Column(name="orders_status")
	private boolean orderStatus;
	
	public OrderEntity() {}

	public OrderEntity(int id, CustomerEntity customer, List<FoodItemEntity> foodItems, int totalAmount,
			boolean orderStatus) {
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

	public CustomerEntity getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerEntity customer) {
		this.customer = customer;
	}

	public List<FoodItemEntity> getFoodItems() {
		return foodItems;
	}

	public void setFoodItems(List<FoodItemEntity> foodItems) {
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
