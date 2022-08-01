package com.oms.data;

import java.util.List;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.oms.beans.Tickets;

public interface TicketRepository extends JpaRepositoryImplementation<Tickets, Integer> {

	public List<Tickets> findAll();

}
