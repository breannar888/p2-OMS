package com.oms.data;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oms.beans.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Integer>{

	
}
