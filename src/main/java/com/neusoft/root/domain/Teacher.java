package com.neusoft.root.domain;

public class Teacher {
	private String teacherId;
	private String teacherName;
	private String teacherPassword;
	private String teacherAcademy;
	private String teacherMajor;
	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Teacher(String teacherId, String teacherName, String teacherPassword, String teacherAcademy,
			String teacherMajor) {
		super();
		this.teacherId = teacherId;
		this.teacherName = teacherName;
		this.teacherPassword = teacherPassword;
		this.teacherAcademy = teacherAcademy;
		this.teacherMajor = teacherMajor;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((teacherAcademy == null) ? 0 : teacherAcademy.hashCode());
		result = prime * result + ((teacherId == null) ? 0 : teacherId.hashCode());
		result = prime * result + ((teacherMajor == null) ? 0 : teacherMajor.hashCode());
		result = prime * result + ((teacherName == null) ? 0 : teacherName.hashCode());
		result = prime * result + ((teacherPassword == null) ? 0 : teacherPassword.hashCode());
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
		Teacher other = (Teacher) obj;
		if (teacherAcademy == null) {
			if (other.teacherAcademy != null)
				return false;
		} else if (!teacherAcademy.equals(other.teacherAcademy))
			return false;
		if (teacherId == null) {
			if (other.teacherId != null)
				return false;
		} else if (!teacherId.equals(other.teacherId))
			return false;
		if (teacherMajor == null) {
			if (other.teacherMajor != null)
				return false;
		} else if (!teacherMajor.equals(other.teacherMajor))
			return false;
		if (teacherName == null) {
			if (other.teacherName != null)
				return false;
		} else if (!teacherName.equals(other.teacherName))
			return false;
		if (teacherPassword == null) {
			if (other.teacherPassword != null)
				return false;
		} else if (!teacherPassword.equals(other.teacherPassword))
			return false;
		return true;
	}
	public String getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}
	public String getTeacherName() {
		return teacherName;
	}
	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}
	public String getTeacherPassword() {
		return teacherPassword;
	}
	public void setTeacherPassword(String teacherPassword) {
		this.teacherPassword = teacherPassword;
	}
	public String getTeacherAcademy() {
		return teacherAcademy;
	}
	public void setTeacherAcademy(String teacherAcademy) {
		this.teacherAcademy = teacherAcademy;
	}
	public String getTeacherMajor() {
		return teacherMajor;
	}
	public void setTeacherMajor(String teacherMajor) {
		this.teacherMajor = teacherMajor;
	}
	
}
