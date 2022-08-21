package com.foodbox.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.foodbox.entity.CustomerEntity;

public interface CustomerRepository extends CrudRepository<CustomerEntity, Integer> {

	
	 Optional<CustomerEntity> findByUserName(String name);

}
