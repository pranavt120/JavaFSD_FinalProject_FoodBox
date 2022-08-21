package com.foodbox.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.foodbox.dto.AdminDto;
import com.foodbox.entity.AdminEntity;
import com.foodbox.repository.AdminRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private AdminRepository repository;
	
	
	
	@GetMapping("")
	ResponseEntity<List<AdminDto>>  findAll() {
		List<AdminEntity> admins = (List<AdminEntity>) repository.findAll();
		List<AdminDto> adminsDto = admins.stream().map(admin -> mapper.map(admin, AdminDto.class))
				.collect(Collectors.toList());
		
		return new ResponseEntity<>(adminsDto, HttpStatus.OK);
		
	}
	
	@GetMapping("/{id}")
	ResponseEntity<AdminDto> findOneById(@PathVariable Integer id) {
		Optional<AdminEntity> admin = repository.findById(id);
		if(admin.isPresent()) {
			return new ResponseEntity<>(mapper.map(admin.get(), AdminDto.class),HttpStatus.OK);
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No admin with given id.");
		}
		
	}
	
	
	@PostMapping("/register")
	ResponseEntity<AdminDto> createAdmin (@RequestBody AdminDto adminDto) {
//		System.out.println(adminDto);
		AdminEntity admin = mapper.map(adminDto, AdminEntity.class);
		
		AdminEntity saved  = repository.save(admin);
		
		return new ResponseEntity<>(mapper.map(saved, AdminDto.class), HttpStatus.CREATED);
		
	}
	
	
	
	@GetMapping("/username/{username}")
	ResponseEntity<AdminDto> getAdminUsername(@PathVariable String username){
		Optional<AdminEntity> admin = repository.findByuserName(username);
		if(admin.isPresent()) {
			return new ResponseEntity<AdminDto>(mapper.map(admin.get(), AdminDto.class), HttpStatus.OK);
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No admin with given username.");
		}
	}
	
	
	@PostMapping("/login")
	ResponseEntity<AdminDto> login(@RequestBody AdminDto creds){
		Optional<AdminEntity> admin = repository.findByuserName(creds.getUserName());
		if(admin.isPresent()) {
			if(admin.get().getPassword().equals(creds.getPassword())) {
				return new ResponseEntity<AdminDto>(mapper.map(admin.get(), AdminDto.class), HttpStatus.OK);
			}else {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No admin with given username.");
			}
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "No admin with given username.");
		}
	}
	
	
	
	@PutMapping("/update/{id}")
	ResponseEntity<AdminDto> update(@PathVariable Integer id , @RequestBody AdminDto admin){
		Optional<AdminEntity> adminEntity = repository.findById(id);
		if(adminEntity.isPresent()) {
			var temp = adminEntity.get();
			 temp = mapper.map(admin, AdminEntity.class);
			 repository.save(temp);
			 return new ResponseEntity<AdminDto>(mapper.map(temp, AdminDto.class), HttpStatus.OK);
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Resource Not found");
		}
	}
	
	
	
	@DeleteMapping("/delete/{id}")
	void delete(@PathVariable Integer id){
		repository.deleteById(id);
		
	}
	

}
