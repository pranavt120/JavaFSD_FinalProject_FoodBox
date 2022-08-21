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

import com.foodbox.dto.CusineDto;
import com.foodbox.entity.CusineEntity;
import com.foodbox.repository.CusineRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api/cusine")
public class CusineController {
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private CusineRepository repository;
	
	@GetMapping("")
	ResponseEntity<List<CusineDto>> getAll(){
		
		List<CusineEntity> cusines = (List<CusineEntity>) repository.findAll(); 
		List<CusineDto> cusinesDto = cusines.stream().map( cusine -> mapper.map(cusine, CusineDto.class)).collect(Collectors.toList());
		
		return new ResponseEntity<List<CusineDto>>(cusinesDto, HttpStatus.OK);
	}
	
	
	@PostMapping("/addCusine")
	ResponseEntity<CusineDto> addCusine(@RequestBody CusineDto cusine){
		
		CusineEntity cusineEntity = mapper.map(cusine, CusineEntity.class);
		
		repository.save(cusineEntity);
		
		return new ResponseEntity<CusineDto>(mapper.map(cusineEntity, CusineDto.class), HttpStatus.CREATED);
	}

	
	@DeleteMapping("/removeCusine/{id}")
	ResponseEntity<String> removeCusine(@PathVariable Integer id){
		
		repository.deleteById(id);
		return new ResponseEntity<String>("Resource Deleted", HttpStatus.OK);
	}
	
	
	
	@PutMapping("/updateCusine/{id}")
	ResponseEntity<CusineDto> updateCusine(@PathVariable Integer id, @RequestBody CusineDto cusine){
		
		Optional<CusineEntity> cusineEntity = repository.findById(id);
		if(cusineEntity.isPresent()) {
			cusineEntity.get().setName(cusine.getName());
			cusineEntity.get().setDescription(cusine.getDescription());
			repository.save(cusineEntity.get());
			
			return new ResponseEntity<CusineDto>(mapper.map(cusineEntity.get(), CusineDto.class),HttpStatus.OK);
		}else {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Resource not found");
		}
	}
}
