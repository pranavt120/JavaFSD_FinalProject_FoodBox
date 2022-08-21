package com.foodbox.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foodbox.dto.CustomerDto;
import com.foodbox.entity.CustomerEntity;
import com.foodbox.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/customers")
public class UserController {
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CustomerRepository repository;
	
	
	@PostMapping("/register")
	ResponseEntity<CustomerDto> registerCustomer(@RequestBody CustomerDto customer){
		
		CustomerEntity customerEntity = mapper.map(customer, CustomerEntity.class);
		
		repository.save(customerEntity);
		
		return new ResponseEntity<CustomerDto>(mapper.map(customerEntity, CustomerDto.class), HttpStatus.CREATED);
		
	}
	
	@GetMapping("/login/{id}")
	ResponseEntity<CustomerDto> loginId(@PathVariable Integer id){
		Optional<CustomerEntity> customer = repository.findById(id);
		if(customer.isPresent()) {
			return new ResponseEntity<CustomerDto>(mapper.map(customer, CustomerDto.class), HttpStatus.OK);
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found");
		}
	}
	
	@PostMapping("/login/{name}")
	ResponseEntity<CustomerDto> loginUserName(@PathVariable String name, @RequestBody String pass){
		Optional<CustomerEntity> customer = repository.findByUserName(name);
		if(customer.isPresent()) {
			
			if(customer.get().getPassword().equals(pass)) {
				return new ResponseEntity<CustomerDto>(mapper.map(customer.get(), CustomerDto.class), HttpStatus.OK);
			}else {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found");
			}
			
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not found");
		}
	}
	
	
	@GetMapping("/customers")
	ResponseEntity<List<CustomerDto>> getUsers(){
		List<CustomerEntity> customersEntity = (List<CustomerEntity>) repository.findAll();
		
		List<CustomerDto> customerDto = customersEntity.stream()
				.map(customer -> mapper.map(customer, CustomerDto.class))
				.collect(Collectors.toList());
		
		return new ResponseEntity<List<CustomerDto>>(customerDto, HttpStatus.OK);
	}
	
	@GetMapping("user/{id}")
	ResponseEntity<CustomerDto> getUser(@PathVariable Integer id){
		Optional<CustomerEntity> customer = repository.findById(id);
		if(customer.isPresent()) {
			return new ResponseEntity<CustomerDto>(mapper.map(customer, CustomerDto.class),HttpStatus.OK);
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Resource not found");
		}
	}

}
