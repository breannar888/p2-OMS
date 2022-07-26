package com.oms.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oms.beans.Orders;
import com.oms.data.OrderRepository;

@Service
public class OrderService {

	private static final int DEFAULT_PAGE_SIZE = 10;
	
	@Autowired
	OrderRepository repo;
	
	//get
	public List<Orders> findAllOrdersPaged(int page) {
		return repo.findAll(PageRequest.of(page, DEFAULT_PAGE_SIZE)).toList();
	}
	
	public List<Orders> findAll() {
		return repo.findAll();
	}
	
	//create
	public Orders save(Orders order) {
		return repo.save(order);
	}
	
	//update by id
	public Orders updateByID(int id, Orders order) {
		if(repo.existsById(id)) {
			order.setOrderID(id);
			return repo.save(order);
		} else {
			throw new IllegalArgumentException("ID doesn't exist");
		}
	}
	
	@Transactional
	public ResponseEntity<Void> delete(int id) {
		repo.deleteById(id);
		return ResponseEntity.status(204).build();
	}
	
}
