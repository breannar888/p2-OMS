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
@Table(name = "Status")
public class Status {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Status_ID")
	private int statusID;
	
	@Column(name = "Status_Code")
	private String stausCode;
	
	@OneToMany(mappedBy = "status")
	@JsonIgnore
	private Set<Orders> orders;
	
	public Status() {
		super();
	}
	
	public Status(int statusID, String stausCode, Set<Orders> orders) {
		super();
		this.statusID = statusID;
		this.stausCode = stausCode;
		this.orders = orders;
	}

	public Set<Orders> getOrders() {
		return orders;
	}

	public void setOrders(Set<Orders> orders) {
		this.orders = orders;
	}

	public int getStatusID() {
		return statusID;
	}
	
	public void setStatusID(int statusID) {
		this.statusID = statusID;
	}
	
	public String getStausCode() {
		return stausCode;
	}
	
	public void setStausCode(String stausCode) {
		this.stausCode = stausCode;
	}
	
}
