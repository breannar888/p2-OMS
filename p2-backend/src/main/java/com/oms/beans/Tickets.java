package com.oms.beans;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Ticket")
public class Tickets {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Ticket_ID")
	private int ticketID;
	
	@Column(name="Ticket_Name")
	private String ticketName;
	
	@OneToMany(mappedBy = "ticket")
	@JsonIgnore
	private Set<Orders> orders;
	
	public Tickets() {
		super();
	}
	
	public Tickets(int ticketID, String ticketName, Set<Orders> orders) {
		super();
		this.ticketID = ticketID;
		this.ticketName = ticketName;
		this.orders = orders;
	}

	public Set<Orders> getOrders() {
		return orders;
	}

	public void setOrders(Set<Orders> orders) {
		this.orders = orders;
	}

	public int getTicketID() {
		return ticketID;
	}
	
	public void setTicketID(int ticketID) {
		this.ticketID = ticketID;
	}
	
	public String getTicketName() {
		return ticketName;
	}
	
	public void setTicketName(String ticketName) {
		this.ticketName = ticketName;
	}
	
	@Override
	public String toString() {
		return "Status [ticketID=" + ticketID + ", ticketName=" + ticketName + "]";
	}
	
}
