package com.foodbox.controller;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foodbox.dto.OrderDto;
import com.foodbox.entity.OrderEntity;
import com.foodbox.repository.OrderRepository;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private OrderRepository repository;
	
	
	@GetMapping("/{id}")
	ResponseEntity<OrderDto> getAllOrders(@PathVariable Integer id){
		
		Optional<OrderEntity> orders = repository.findById(id);
		if(orders.isPresent()) {
			OrderDto orderDto = mapper.map(orders, OrderDto.class);
			return new ResponseEntity<OrderDto>(orderDto, HttpStatus.OK);
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Resource Not Found");
		}
	}

}
