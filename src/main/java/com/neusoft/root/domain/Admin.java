package com.neusoft.root.domain;

public class Admin {
	
	private String admin_password;
	private  String admin_id;
	private String admin_name;
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((admin_id == null) ? 0 : admin_id.hashCode());
		result = prime * result + ((admin_name == null) ? 0 : admin_name.hashCode());
		result = prime * result + ((admin_password == null) ? 0 : admin_password.hashCode());
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
		Admin other = (Admin) obj;
		if (admin_id == null) {
			if (other.admin_id != null)
				return false;
		} else if (!admin_id.equals(other.admin_id))
			return false;
		if (admin_name == null) {
			if (other.admin_name != null)
				return false;
		} else if (!admin_name.equals(other.admin_name))
			return false;
		if (admin_password == null) {
			if (other.admin_password != null)
				return false;
		} else if (!admin_password.equals(other.admin_password))
			return false;
		return true;
	}
	public Admin(String admin_id, String admin_name, String admin_password) {
		super();
		this.admin_id = admin_id;
		this.admin_name = admin_name;
		this.admin_password = admin_password;
	}
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(String admin_id) {
		this.admin_id = admin_id;
	}
	public String getAdmin_name() {
		return admin_name;
	}
	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}
	public String getAdmin_password() {
		return admin_password;
	}
	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}
	





}
	
