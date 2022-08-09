package com.oms.data;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.oms.beans.Menu;

public interface MenuRepository extends JpaRepository<Menu, Integer>{

	public Page<Menu> findAll(Pageable pageable);

	public List<Menu> findByMenuItemLike(String menuItem);
	
	@Modifying
	@Query("DELETE FROM Orders WHERE Menu_ID = :id")
	public void deleteOrderByMenuID(int id);
	
}
