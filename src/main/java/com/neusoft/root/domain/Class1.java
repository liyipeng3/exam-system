package com.neusoft.root.domain;

public class Class1 {
	private String class_id;
	private String class_name;
	private int class_seats;
	public Class1(String class_id, String class_name, int class_seats) {
		super();
		this.class_id = class_id;
		this.class_name = class_name;
		this.class_seats = class_seats;
	}
	public String getClass_id() {
		return class_id;
	}
	public void setClass_id(String class_id) {
		this.class_id = class_id;
	}
	public Class1() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getClass_name() {
		return class_name;
	}
	public void setClass_name(String class_name) {
		this.class_name = class_name;
	}
	public int getClass_seats() {
		return class_seats;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((class_id == null) ? 0 : class_id.hashCode());
		result = prime * result + ((class_name == null) ? 0 : class_name.hashCode());
		result = prime * result + class_seats;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Class1 other = (Class1) obj;
		if (class_id == null) {
			if (other.class_id != null)
				return false;
		} else if (!class_id.equals(other.class_id))
			return false;
		if (class_name == null) {
			if (other.class_name != null)
				return false;
		} else if (!class_name.equals(other.class_name))
			return false;
		if (class_seats != other.class_seats)
			return false;
		return true;
	}
	public void setClass_seats(int class_seats) {
		this.class_seats = class_seats;
	}
	
}
