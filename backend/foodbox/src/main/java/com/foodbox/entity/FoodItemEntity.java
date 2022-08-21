package com.foodbox.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.CollectionTable;
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

@Entity
@Table(name="food_item")
@Embeddable
public class FoodItemEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "food_id")
	private int id;
	
	@Column(name = "food_name")
	private String name;
	
	@Column(name = "food_price")
	private float price;
	
	@Column(name = "food_img_path")
	private String image_path;
	
	@Column(name = "food_status")
	private boolean status;
	
	@Column(name = "food_description")
	private String description;
	
	@ElementCollection
	@CollectionTable(name = "foodItem_ingredients", joinColumns = @JoinColumn(name = "food_id"))
	@Column(name = "food_ingredients")
	private List<String> ingredients = new ArrayList<>();
	
	@ManyToOne
	@JoinColumn(name = "cusine_id", referencedColumnName = "cusine_id", nullable = false)
	private CusineEntity cusine;
	
	
	@OneToOne(mappedBy = "foodItem")
	private RatingEntity rating;
	
	
	public FoodItemEntity() {}

	public FoodItemEntity(int id, String name, float price, String image_path, boolean status,
			List<String> ingredients, CusineEntity cusineId, String desc) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.image_path = image_path;
		this.status = status;
		this.ingredients = ingredients;
		this.cusine = cusineId;
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
	
	

	public CusineEntity getCusine() {
		return cusine;
	}

	public void setCusine(CusineEntity cusine) {
		this.cusine = cusine;
	}

	public RatingEntity getRating() {
		return rating;
	}

	public void setRating(RatingEntity rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "FoodItemEntity [id=" + id + ", name=" + name + ", price=" + price + ", image_path=" + image_path
				+ ", status=" + status + ", description=" + description + ", ingredients=" + ingredients + ", cusine="
				+ cusine + ", rating=" + rating + "]";
	}

	
	
	
	

}
