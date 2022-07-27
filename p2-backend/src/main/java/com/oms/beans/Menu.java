package com.oms.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Menu")
public class Menu {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "Menu_Id")
	private int menuID;
	
	@Column(name= "Name")
	//@NotBlank
	private String menuItem;
	
	@Column(name= "Price")
	private double price;
	
	@Column(name= "Image_Path")
	private String imagePath;

	public Menu() {
		super();
	}

	public Menu(int menuID, String menuItem, double price, String imagePath) {
		super();
		this.menuID = menuID;
		this.menuItem = menuItem;
		this.price = price;
		this.imagePath = imagePath;
	}

	public Menu(int menuID, String menuItem, double price) {
		super();
		this.menuID = menuID;
		this.menuItem = menuItem;
		this.price = price;
	}

	public int getMenuID() {
		return menuID;
	}

	public void setMenuID(int menuID) {
		this.menuID = menuID;
	}

	public String getMenuItem() {
		return menuItem;
	}

	public void setMenuItem(String menuItem) {
		this.menuItem = menuItem;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	@Override
	public String toString() {
		return "Menu [menuID=" + menuID + ", menuItem=" + menuItem + ", price=" + price + ", imagePath=" + imagePath
				+ "]";
	}

}
