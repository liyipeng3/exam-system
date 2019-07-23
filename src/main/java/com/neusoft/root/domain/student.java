package com.neusoft.root.domain;

public class student {
	private String student_id;
	private String student_name;
	private String student_password;
	private String student_academy;
	private String student_major;
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((student_academy == null) ? 0 : student_academy.hashCode());
		result = prime * result + ((student_id == null) ? 0 : student_id.hashCode());
		result = prime * result + ((student_major == null) ? 0 : student_major.hashCode());
		result = prime * result + ((student_name == null) ? 0 : student_name.hashCode());
		result = prime * result + ((student_password == null) ? 0 : student_password.hashCode());
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
		student other = (student) obj;
		if (student_academy == null) {
			if (other.student_academy != null)
				return false;
		} else if (!student_academy.equals(other.student_academy))
			return false;
		if (student_id == null) {
			if (other.student_id != null)
				return false;
		} else if (!student_id.equals(other.student_id))
			return false;
		if (student_major == null) {
			if (other.student_major != null)
				return false;
		} else if (!student_major.equals(other.student_major))
			return false;
		if (student_name == null) {
			if (other.student_name != null)
				return false;
		} else if (!student_name.equals(other.student_name))
			return false;
		if (student_password == null) {
			if (other.student_password != null)
				return false;
		} else if (!student_password.equals(other.student_password))
			return false;
		return true;
	}
	public student(String student_id, String student_name, String student_password, String student_academy,
			String student_major) {
		super();
		this.student_id = student_id;
		this.student_name = student_name;
		this.student_password = student_password;
		this.student_academy = student_academy;
		this.student_major = student_major;
	}
	public student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getStudent_id() {
		return student_id;
	}
	public void setStudent_id(String student_id) {
		this.student_id = student_id;
	}
	public String getStudent_name() {
		return student_name;
	}
	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}
	public String getStudent_password() {
		return student_password;
	}
	public void setStudent_password(String student_password) {
		this.student_password = student_password;
	}
	public String getStudent_academy() {
		return student_academy;
	}
	public void setStudent_academy(String student_academy) {
		this.student_academy = student_academy;
	}
	public String getStudent_major() {
		return student_major;
	}
	public void setStudent_major(String student_major) {
		this.student_major = student_major;
	}
}
