package com.foodbox.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.foodbox.entity.AdminEntity;

public interface AdminRepository extends CrudRepository<AdminEntity, Integer> {
	
	Optional<AdminEntity> findByuserName(String username);
	

}
