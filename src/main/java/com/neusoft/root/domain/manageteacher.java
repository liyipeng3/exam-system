package com.neusoft.root.domain;

public class manageteacher {
	private String class_id;
	private String teacher_id;
	private String course_id;
	public String getClass_id() {
		return class_id;
	}
	public void setClass_id(String class_id) {
		this.class_id = class_id;
	}
	public String getTeacher_id() {
		return teacher_id;
	}
	public void setTeacher_id(String teacher_id) {
		this.teacher_id = teacher_id;
	}
	public String getCourse_id() {
		return course_id;
	}
	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	public manageteacher(String class_id, String teacher_id, String course_id) {
		super();
		this.class_id = class_id;
		this.teacher_id = teacher_id;
		this.course_id = course_id;
	}
	public manageteacher() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((class_id == null) ? 0 : class_id.hashCode());
		result = prime * result + ((course_id == null) ? 0 : course_id.hashCode());
		result = prime * result + ((teacher_id == null) ? 0 : teacher_id.hashCode());
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
		manageteacher other = (manageteacher) obj;
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
		if (teacher_id == null) {
			if (other.teacher_id != null)
				return false;
		} else if (!teacher_id.equals(other.teacher_id))
			return false;
		return true;
	}
	
}
