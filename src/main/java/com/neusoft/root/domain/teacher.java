package com.neusoft.root.domain;

public class teacher {
	private String teacher_id;
	private String teacher_name;
	private String teacher_password;
	private String teacher_academy;
	private String teacher_major;
	public teacher() {
		super();
		// TODO Auto-generated constructor stub
	}
	public teacher(String teacher_id, String teacher_name, String teacher_password, String teacher_academy,
			String teacher_major) {
		super();
		this.teacher_id = teacher_id;
		this.teacher_name = teacher_name;
		this.teacher_password = teacher_password;
		this.teacher_academy = teacher_academy;
		this.teacher_major = teacher_major;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((teacher_academy == null) ? 0 : teacher_academy.hashCode());
		result = prime * result + ((teacher_id == null) ? 0 : teacher_id.hashCode());
		result = prime * result + ((teacher_major == null) ? 0 : teacher_major.hashCode());
		result = prime * result + ((teacher_name == null) ? 0 : teacher_name.hashCode());
		result = prime * result + ((teacher_password == null) ? 0 : teacher_password.hashCode());
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
		teacher other = (teacher) obj;
		if (teacher_academy == null) {
			if (other.teacher_academy != null)
				return false;
		} else if (!teacher_academy.equals(other.teacher_academy))
			return false;
		if (teacher_id == null) {
			if (other.teacher_id != null)
				return false;
		} else if (!teacher_id.equals(other.teacher_id))
			return false;
		if (teacher_major == null) {
			if (other.teacher_major != null)
				return false;
		} else if (!teacher_major.equals(other.teacher_major))
			return false;
		if (teacher_name == null) {
			if (other.teacher_name != null)
				return false;
		} else if (!teacher_name.equals(other.teacher_name))
			return false;
		if (teacher_password == null) {
			if (other.teacher_password != null)
				return false;
		} else if (!teacher_password.equals(other.teacher_password))
			return false;
		return true;
	}
	public String getTeacher_id() {
		return teacher_id;
	}
	public void setTeacher_id(String teacher_id) {
		this.teacher_id = teacher_id;
	}
	public String getTeacher_name() {
		return teacher_name;
	}
	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
	}
	public String getTeacher_password() {
		return teacher_password;
	}
	public void setTeacher_password(String teacher_password) {
		this.teacher_password = teacher_password;
	}
	public String getTeacher_academy() {
		return teacher_academy;
	}
	public void setTeacher_academy(String teacher_academy) {
		this.teacher_academy = teacher_academy;
	}
	public String getTeacher_major() {
		return teacher_major;
	}
	public void setTeacher_major(String teacher_major) {
		this.teacher_major = teacher_major;
	}
}
