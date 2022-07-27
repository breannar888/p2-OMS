package com.oms.data;

import java.util.List;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.http.ResponseEntity;

import com.oms.beans.Menu;

//define CRUD methods
public interface MenuRepository extends JpaRepositoryImplementation<Menu, Integer>{

	public List<Menu> findAll();

	public List<Menu> findByMenuItemLike(String menuItem);
	
}
