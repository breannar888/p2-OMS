package com.oms.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.http.ResponseEntity;

import com.oms.beans.Menu;

public interface MenuRepository extends JpaRepository<Menu, Integer>{

	public List<Menu> findAll();

	public List<Menu> findByMenuItemLike(String menuItem);
	
}
