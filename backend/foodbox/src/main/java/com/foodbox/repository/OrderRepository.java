package com.foodbox.repository;

import org.springframework.data.repository.CrudRepository;

import com.foodbox.entity.OrderEntity;

public interface OrderRepository extends CrudRepository<OrderEntity, Integer> {

}
