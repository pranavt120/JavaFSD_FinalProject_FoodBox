package com.foodbox.dto;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


public class FoodItemDto {
	

	private int id;
	private String name;
	private float price;
	private String image_path;
	private boolean status;
	private List<String> ingredients;
	private CusineDto cusine;
	private RatingDto rating;
	private String description;
	
	
	public FoodItemDto() {}

	

	public FoodItemDto(int id, String name, float price, String image_path, boolean status, List<String> ingredients,
			CusineDto cusine, RatingDto rating, String desc) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.image_path = image_path;
		this.status = status;
		this.ingredients = ingredients;
		this.cusine = cusine;
		this.rating = rating;
		this.description = desc;
	}

	


	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getImage_path() {
		return image_path;
	}

	public void setImage_path(String image_path) {
		this.image_path = image_path;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public List<String> getIngredients() {
		return ingredients;
	}

	public void setIngredients(List<String> ingredients) {
		this.ingredients = ingredients;
	}



	public CusineDto getCusine() {
		return cusine;
	}



	public void setCusine(CusineDto cusine) {
		this.cusine = cusine;
	}



	public RatingDto getRating() {
		return rating;
	}



	public void setRating(RatingDto rating) {
		this.rating = rating;
	}
	
	

}
