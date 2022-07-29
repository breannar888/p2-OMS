package com.oms.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.oms.beans.Menu;
import com.oms.beans.Orders;
import com.oms.data.MenuRepository;
import com.oms.data.OrderRepository;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "*")
public class OrderController {

	@Autowired
	private OrderRepository repo;

	@GetMapping
	@ResponseBody
	public Object findAll() {
			return repo.findAll();
	}

	@PostMapping
	public ResponseEntity<Orders> create(@Valid @RequestBody Orders order) {
		return new ResponseEntity<>(repo.save(order), HttpStatus.CREATED);
	}

	// findById
	@GetMapping("/{id}")
	public ResponseEntity<Orders> findById(@PathVariable int id) {
		return ResponseEntity.ok(repo.findById(id).orElse(new Orders()));
	}

	// Pagination
}
