package com.foodbox.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.foodbox.dto.CusineDto;
import com.foodbox.entity.CusineEntity;
import com.foodbox.entity.FoodItemEntity;

public interface FoodItemRepository extends CrudRepository<FoodItemEntity, Integer> {
	
//	@Modifying
//	@Transactional
//	@Query(" update FoodItemEntity f set f.image_path = ?1, f.name=?2, f.price = ?3, f.status = ?4, f.cusine = ?5 where f.id = ?6")
//	void updateItem(String imgPath, String name, float price, boolean status, int cusine,  int id);

}
