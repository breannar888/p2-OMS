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
import javax.persistence.Table;

@Entity
@Table(name = "Orders")
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "Order_ID")
	private int orderID;
	
	@ManyToOne
	@JoinColumn(name = "Menu_ID")
	private Menu menu;
	
	@ManyToOne
	@JoinColumn(name = "Status_ID")
	private Status status;

	@ManyToOne
	@JoinColumn(name = "Ticket_ID")
	private Tickets ticket;
	
	@Column(name= "Notes")
	private String notes;
	
	public Orders() {
		super();
	}

	public Orders(int orderID, Menu menu, Status status, Tickets ticket, String notes) {
		super();
		this.orderID = orderID;
		this.menu = menu;
		this.status = status;
		this.ticket = ticket;
		this.notes = notes;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public int getOrderID() {
		return orderID;
	}

	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Tickets getTicket() {
		return ticket;
	}

	public void setTicket(Tickets ticket) {
		this.ticket = ticket;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
}
