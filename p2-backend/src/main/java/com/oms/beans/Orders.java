package com.oms.beans;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Orders")
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "Order_ID")
	private int orderID;
	
	@OneToMany(mappedBy = "orders")
	private Set<Menu> menuItems;
	
	@Column(name= "Status_ID")
	private int statusID;

	@Column(name= "Ticket_ID")
	private int ticketID;
	
	@Column(name= "Notes")
	private String notes;
	
	public Orders() {
		super();
	}
	
	public Orders(int orderID, Set<Menu> menuItems, int statusID, int ticketID, String notes) {
		super();
		this.orderID = orderID;
		this.menuItems = menuItems;
		this.statusID = statusID;
		this.ticketID = ticketID;
		this.notes = notes;
	}

	public int getOrderID() {
		return orderID;
	}

	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}

	public Set<Menu> getMenuItems() {
		return menuItems;
	}

	public void setMenuItems(Set<Menu> menuItems) {
		this.menuItems = menuItems;
	}

	public int getStatusID() {
		return statusID;
	}

	public void setStatusID(int statusID) {
		this.statusID = statusID;
	}

	public int getTicketID() {
		return ticketID;
	}

	public void setTicketID(int ticketID) {
		this.ticketID = ticketID;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
}
