package com.oms.beans;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int orderID;
	
	@Column
	private String notes;
	
	//@ManyToOne - many menu items on one order
	//@JoinColumn(name = "TicketId")
	private int ticketID;
	
	//@ManyToOne - many menu items on one order
	//@JoinColumn(name = "MenuId")
	private Menu menu;
	
	//@ManyToOne - many statuses on one order
	//@JoinColumn(name = "StatusId")
	private Status status;
	
	public Orders() {
		super();
	}

	public Orders(int orderID, String notes, int ticketID, Menu menu, Status status) {
		super();
		this.orderID = orderID;
		this.notes = notes;
		this.ticketID = ticketID;
		this.menu = menu;
		this.status = status;
	}


	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public int getOrderID() {
		return orderID;
	}

	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}


	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public int getTicketID() {
		return ticketID;
	}

	public void setTicketID(int ticketID) {
		this.ticketID = ticketID;
	}

	@Override
	public String toString() {
		return "Orders [orderID=" + orderID + ", notes=" + notes + ", ticketID=" + ticketID + ", menu=" + menu
				+ ", status=" + status + "]";
	}
	
	
	
}
