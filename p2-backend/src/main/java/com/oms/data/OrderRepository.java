package com.oms.data;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.oms.beans.Orders;

public interface OrderRepository extends JpaRepository<Orders, Integer> {

	public Page<Orders> findAll(Pageable pageable);
	
	@Modifying
	@Query("DELETE FROM Orders WHERE Menu_ID = :id")
	public void deleteByMenuid(int id);

}

