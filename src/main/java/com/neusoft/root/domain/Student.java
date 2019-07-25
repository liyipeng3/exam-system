package com.neusoft.root.domain;

public class Student {
	private String studentId;
	private String studentName;
	private String studentPassword;
	private String studentAcademy;
	private String studentMajor;
	private String studentSchool;
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((studentAcademy == null) ? 0 : studentAcademy.hashCode());
		result = prime * result + ((studentId == null) ? 0 : studentId.hashCode());
		result = prime * result + ((studentMajor == null) ? 0 : studentMajor.hashCode());
		result = prime * result + ((studentName == null) ? 0 : studentName.hashCode());
		result = prime * result + ((studentPassword == null) ? 0 : studentPassword.hashCode());
		result = prime * result + ((studentSchool == null) ? 0 : studentSchool.hashCode());
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
		Student other = (Student) obj;
		if (studentAcademy == null) {
			if (other.studentAcademy != null)
				return false;
		} else if (!studentAcademy.equals(other.studentAcademy))
			return false;
		if (studentId == null) {
			if (other.studentId != null)
				return false;
		} else if (!studentId.equals(other.studentId))
			return false;
		if (studentMajor == null) {
			if (other.studentMajor != null)
				return false;
		} else if (!studentMajor.equals(other.studentMajor))
			return false;
		if (studentName == null) {
			if (other.studentName != null)
				return false;
		} else if (!studentName.equals(other.studentName))
			return false;
		if (studentPassword == null) {
			if (other.studentPassword != null)
				return false;
		} else if (!studentPassword.equals(other.studentPassword))
			return false;
		if (studentSchool == null) {
			if (other.studentSchool != null)
				return false;
		} else if (!studentSchool.equals(other.studentSchool))
			return false;
		return true;
	}
	public Student(String studentId, String studentName, String studentPassword, String studentAcademy,
			String studentMajor, String studentSchool) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentPassword = studentPassword;
		this.studentAcademy = studentAcademy;
		this.studentMajor = studentMajor;
		this.studentSchool = studentSchool;
	}
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getStudentPassword() {
		return studentPassword;
	}
	public void setStudentPassword(String studentPassword) {
		this.studentPassword = studentPassword;
	}
	public String getStudentAcademy() {
		return studentAcademy;
	}
	public void setStudentAcademy(String studentAcademy) {
		this.studentAcademy = studentAcademy;
	}
	public String getStudentMajor() {
		return studentMajor;
	}
	public void setStudentMajor(String studentMajor) {
		this.studentMajor = studentMajor;
	}
	public String getStudentSchool() {
		return studentSchool;
	}
	public void setStudentSchool(String studentSchool) {
		this.studentSchool = studentSchool;
	}
	
}
