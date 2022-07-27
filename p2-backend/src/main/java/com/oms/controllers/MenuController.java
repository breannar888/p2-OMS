package com.oms.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.oms.beans.Menu;
import com.oms.data.MenuRepository;

@RestController
@RequestMapping("/menu")
@CrossOrigin(origins = "*") 
public class MenuController {

	@Autowired
	private MenuRepository repo;

	@GetMapping
	@ResponseBody
	public Object findAll(@RequestParam(required = false) String menuItem) {
		//find by name
		if (menuItem != null) {
			return repo.findByMenuItemLike("%" + menuItem + "%");
		} else {
			return repo.findAll();
		}
	}

	@PostMapping
	public ResponseEntity<Menu> create(@Valid @RequestBody Menu menu) {
		return new ResponseEntity<>(repo.save(menu), HttpStatus.CREATED);
	}

	// findById

	// Pagination
}
