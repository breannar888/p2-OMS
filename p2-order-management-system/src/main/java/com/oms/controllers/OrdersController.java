package com.oms.controllers;

import org.springframework.web.bind.annotation.GetMapping;

import com.oms.beans.Orders;

public class OrdersController {

	@GetMapping("/currentOrders")
	public Orders getOrders() {
		return new Orders();
	}
}
