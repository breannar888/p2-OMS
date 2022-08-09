package com.oms.data;

import java.util.List;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.oms.beans.Orders;

public interface OrderRepository extends JpaRepository<Orders, Integer> {

	@Query("from Orders o inner join o.menu")
	public Page<Orders> findAllOrdersPaged(Pageable request);
	
	public List<Orders> findAll();

}

