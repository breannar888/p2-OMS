package com.oms.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.oms.beans.Orders;
import com.oms.services.OrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "*")
public class OrderController {

	@Autowired
	private OrderService service;

	@GetMapping("/log")
	@ResponseBody
	public List<Orders> findAll(@RequestParam(defaultValue = "0") int page) {
		return service.findAllOrdersPaged(page);
	}

	@GetMapping
	@ResponseBody
	public Object findAll() {
		return service.findAll();
	}
	
	@PostMapping
	public Orders create(@Valid @RequestBody Orders order) {
		return service.save(order);
	}

	// Update
	@PutMapping("/{id}")
	public Orders update(@RequestBody Orders order, @PathVariable int id) {
		return service.updateByID(id, order);
	}

	// Delete by Order_ID
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id) {
		return service.delete(id);
	}
	
}
