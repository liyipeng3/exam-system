package com.neusoft.root.domain;

public class Managestudent {
	private String class_id;
	private String student_id;
	private String course_id;
	public String getClass_id() {
		return class_id;
	}
	public void setClass_id(String class_id) {
		this.class_id = class_id;
	}
	public String getStudent_id() {
		return student_id;
	}
	public void setStudent_id(String student_id) {
		this.student_id = student_id;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((class_id == null) ? 0 : class_id.hashCode());
		result = prime * result + ((course_id == null) ? 0 : course_id.hashCode());
		result = prime * result + ((student_id == null) ? 0 : student_id.hashCode());
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
		Managestudent other = (Managestudent) obj;
		if (class_id == null) {
			if (other.class_id != null)
				return false;
		} else if (!class_id.equals(other.class_id))
			return false;
		if (course_id == null) {
			if (other.course_id != null)
				return false;
		} else if (!course_id.equals(other.course_id))
			return false;
		if (student_id == null) {
			if (other.student_id != null)
				return false;
		} else if (!student_id.equals(other.student_id))
			return false;
		return true;
	}
	public String getCourse_id() {
		return course_id;
	}
	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	public Managestudent(String class_id, String student_id, String course_id) {
		super();
		this.class_id = class_id;
		this.student_id = student_id;
		this.course_id = course_id;
	}
	public Managestudent() {
		super();
		// TODO Auto-generated constructor stub
	}
}
