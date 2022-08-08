package com.oms.data;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import com.oms.beans.Sum;
import com.oms.beans.Tickets;

public interface TicketRepository extends JpaRepositoryImplementation<Tickets, Integer> {

	public List<Tickets> findAll();

	@Query(value = "SELECT SUM(Price) FROM Menu M, Orders O WHERE M.Menu_ID = O.Menu_ID GROUP BY O.Ticket_ID", nativeQuery = true)
	public List<Float> sumTicketTotal();
}
