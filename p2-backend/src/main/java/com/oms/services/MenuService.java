package com.oms.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.oms.beans.Menu;
import com.oms.data.MenuRepository;

@Service
public class MenuService {

	private static final int DEFAULT_PAGE_SIZE = 10;

	@Autowired
	MenuRepository repo;

	// get all
	public List<Menu> findAllByPaged(int page, String menuItem) {
		// find by name
		if (menuItem != null) {
			return repo.findByMenuItemLike("%" + menuItem + "%");
		} else {
			return repo.findAll(PageRequest.of(page, DEFAULT_PAGE_SIZE)).toList();
		}
	}

	// create
	public Menu save(Menu menu) {
		return repo.save(menu);
	}

	//find by id
	public Menu findById(int id) {
		return repo.findById(id).orElseThrow(null);
	}
	
	// update
	public Menu updateByID(int id, Menu menu) {
		if (repo.existsById(id)) {
			menu.setMenuID(id);
			return repo.save(menu);
		} else {
			throw new IllegalArgumentException("ID doesn't exist");
		}
	}

	
	//foreign key error - cannot delete menu item while being referenced
	//in the orders table
	
	// delete
	public ResponseEntity<Void> delete(int id) {
		repo.deleteOrderByMenuID(id);
		repo.deleteById(id);
		return ResponseEntity.status(204).build();
	}

}
