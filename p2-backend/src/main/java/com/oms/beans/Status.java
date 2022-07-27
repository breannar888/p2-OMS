package com.oms.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//@Entity
public class Status {
	
	//@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@Column
	private int statusID;
	
	//@Column
	private String stausCode;
	
	public Status() {
		super();
	}
	
	public Status(int statusID, String stausCode) {
		super();
		this.statusID = statusID;
		this.stausCode = stausCode;
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
	
	@Override
	public String toString() {
		return "Status [statusID=" + statusID + ", stausCode=" + stausCode + "]";
	}
	
	
	
}
