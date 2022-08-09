package com.oms.beans;

public class LoginInfo {

	String sessionID;
	String authorities;

	public LoginInfo() {
		super();
	}

	public LoginInfo(String sessionID, String authorities) {
		super();
		this.sessionID = sessionID;
		this.authorities = authorities;
	}

	public String getSessionID() {
		return sessionID;
	}

	public void setSessionID(String sessionID) {
		this.sessionID = sessionID;
	}

	public String getAuthorities() {
		return authorities;
	}

	public void setAuthorities(String authorities) {
		this.authorities = authorities;
	}

}
