package com.oms.data;

import java.util.List;

import org.springdoc.core.converters.models.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.oms.beans.Menu;
import com.oms.beans.Orders;

public interface OrderRepository extends JpaRepository<Orders, Integer> {

	public List<Orders> findAll();

}
