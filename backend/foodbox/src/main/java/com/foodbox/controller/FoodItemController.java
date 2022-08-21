package com.foodbox.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foodbox.dto.AdminDto;
import com.foodbox.dto.CusineDto;
import com.foodbox.dto.FoodItemDto;
import com.foodbox.entity.CusineEntity;
import com.foodbox.entity.FoodItemEntity;
import com.foodbox.repository.FoodItemRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/foodItem")
public class FoodItemController {
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private FoodItemRepository repository;
	
	@PostMapping("/addFoodItem")
	ResponseEntity<FoodItemDto> createFood(@RequestBody FoodItemDto item){
		System.out.println(item);
		FoodItemEntity foodItem = mapper.map(item, FoodItemEntity.class);
		FoodItemEntity savedItem = repository.save(foodItem);
		
		return new ResponseEntity<FoodItemDto>(mapper.map(savedItem, FoodItemDto.class), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteFoodItem/{id}")
	ResponseEntity<String> deleteFood(@PathVariable Integer id){
		repository.deleteById(id);
		return new ResponseEntity<String>("Resource Deleted", HttpStatus.OK);
	}
	
	@PutMapping("/editFoodItem/{id}")
	ResponseEntity<FoodItemDto> editFood(@PathVariable Integer id, @RequestBody FoodItemDto item){
		Optional<FoodItemEntity> foodItem = repository.findById(id);
		if(foodItem.isPresent()) {
			
		CusineDto cusinedto = new CusineDto();
		cusinedto.setId(item.getId());
		CusineEntity cusine = mapper.map(cusinedto, CusineEntity.class);	
			
//		repository.updateItem(item.getImage_path(),
//					item.getName(),
//					item.getPrice(),
//					item.isStatus(),cusine.getId(),foodItem.get().getId());
		
		repository.save(mapper.map(item, FoodItemEntity.class));
				
		return new ResponseEntity<FoodItemDto> (mapper.map(repository.findById(id).get(), FoodItemDto.class), HttpStatus.OK);
			
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Resource Not found");
		}
	}
	
	@GetMapping("")
	ResponseEntity<List<FoodItemDto>> getAllFood(){
		List<FoodItemEntity> foodItems = (List<FoodItemEntity>) repository.findAll();
		
		List<FoodItemDto> foodItemdto = foodItems.stream().map(item -> mapper.map(item, FoodItemDto.class)).collect(Collectors.toList());
		
		return new ResponseEntity<List<FoodItemDto>>(foodItemdto, HttpStatus.OK);
	}
	
	
	@PutMapping("/toggleFoodItem/{id}")
	ResponseEntity<FoodItemDto> toggleFood(@PathVariable Integer id){
		Optional<FoodItemEntity> foodItem = repository.findById(id);
		if(foodItem.isPresent()) {
			foodItem.get().setStatus(!(foodItem.get().isStatus()));
			repository.save(foodItem.get());
			
			return new ResponseEntity<FoodItemDto>(mapper.map(foodItem.get(), FoodItemDto.class), HttpStatus.OK);
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Resource Not found");
		}
	}
	


}
