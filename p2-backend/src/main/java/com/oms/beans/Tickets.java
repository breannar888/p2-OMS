package com.oms.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//@Entity
public class Tickets {

	//@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column
	private int ticketID;
	
	//@Column
	private int ticketName;
	
	public Tickets() {
		super();
	}
	
	public Tickets(int ticketID, int ticketName) {
		super();
		this.ticketID = ticketID;
		this.ticketName = ticketName;
	}
	
	public int getTicketID() {
		return ticketID;
	}
	
	public void setTicketID(int ticketID) {
		this.ticketID = ticketID;
	}
	
	public int getTicketName() {
		return ticketName;
	}
	
	public void setTicketName(int ticketName) {
		this.ticketName = ticketName;
	}
	
	@Override
	public String toString() {
		return "Status [ticketID=" + ticketID + ", ticketName=" + ticketName + "]";
	}
	
}
