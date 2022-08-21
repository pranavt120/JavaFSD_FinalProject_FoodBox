package com.foodbox.repository;

import org.springframework.data.repository.CrudRepository;

import com.foodbox.entity.RatingEntity;

public interface RatingRepository extends CrudRepository<RatingEntity, Integer> {

}
