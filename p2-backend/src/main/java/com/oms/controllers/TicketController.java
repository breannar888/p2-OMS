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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.oms.beans.Tickets;
import com.oms.data.TicketRepository;

@RestController
@RequestMapping("/ticket")
@CrossOrigin(origins = "*")
public class TicketController {

	@Autowired
	private TicketRepository repo;

	@GetMapping
	@ResponseBody
	public Object findAll() {
			return repo.findAll();
	}
	
	@GetMapping("/sum")
	@ResponseBody
	public Object sumTicketTotal() {
		return repo.sumTicketTotal();
	}

	@PostMapping
	public ResponseEntity<Tickets> create(@Valid @RequestBody Tickets ticket) {
		return new ResponseEntity<>(repo.save(ticket), HttpStatus.CREATED);
	}

	// findById
	@GetMapping("/{id}")
	public ResponseEntity<Tickets> findById(@PathVariable int id) {
		return ResponseEntity.ok(repo.findById(id).orElse(new Tickets()));
	}

	// Pagination
}
