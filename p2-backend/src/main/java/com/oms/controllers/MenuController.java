package com.oms.controllers;

import javax.transaction.Transactional;
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

import com.oms.beans.Menu;
import com.oms.services.MenuService;

@RestController
@RequestMapping("/menu")
@CrossOrigin(origins = "*")
public class MenuController {

	@Autowired
	private MenuService service;

	//get all
	@GetMapping
	@ResponseBody
	public Object findAll(@RequestParam(required = false) String menuItem, @RequestParam(defaultValue = "0") int page) {
		return service.findAllByPaged(page, menuItem);
	}

	//create
	@PostMapping
	public Menu create(@Valid @RequestBody Menu menu) {
		return service.save(menu);
	}

	// findById
	@GetMapping("/{id}")
	public Menu findById(@PathVariable int id) {
		return service.findById(id);
	}

	// Update
	@PutMapping("/{id}")
	public Menu update(@RequestBody Menu menu, @PathVariable int id) {
		return service.updateByID(id, menu);
	}

	
	// Delete
	@Transactional
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable int id) {
		return service.delete(id);
	}

}
