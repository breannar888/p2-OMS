package com.oms.data;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.oms.beans.Orders;

public interface OrderRepository extends JpaRepository<Orders, Integer> {

	public Page<Orders> findAll(Pageable pageable);
	


}

