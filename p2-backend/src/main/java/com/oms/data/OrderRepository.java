package com.oms.data;

import java.util.List;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.oms.beans.Menu;
import com.oms.beans.Orders;

public interface OrderRepository extends JpaRepositoryImplementation<Orders, Integer> {

	public List<Orders> findAll();

}
