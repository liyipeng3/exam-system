package com.neusoft.root.domain;

import java.sql.Date;

public class Manageteacher {
	private String classId;
	private String teacherId;
	private String courseId;
	private Date examDate;
	
	public Date getExamDate() {
		return examDate;
	}
	public void setExamDate(Date examDate) {
		this.examDate = examDate;
	}
	public String getClassId() {
		return classId;
	}
	@Override
	public String toString() {
		return "Manageteacher [classId=" + classId + ", teacherId=" + teacherId + ", courseId=" + courseId
				+ ", examDate=" + examDate + "]";
	}
	public void setClassId(String classId) {
		this.classId = classId;
	}
	public String getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}
	public String getCourseId() {
		return courseId;
	}
	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}
	public Manageteacher(String classId, String teacherId, String courseId) {
		super();
		this.classId = classId;
		this.teacherId = teacherId;
		this.courseId = courseId;
	}
	public Manageteacher() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Manageteacher(String classId, String teacherId, String courseId, Date examDate) {
		super();
		this.classId = classId;
		this.teacherId = teacherId;
		this.courseId = courseId;
		this.examDate = examDate;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((classId == null) ? 0 : classId.hashCode());
		result = prime * result + ((courseId == null) ? 0 : courseId.hashCode());
		result = prime * result + ((examDate == null) ? 0 : examDate.hashCode());
		result = prime * result + ((teacherId == null) ? 0 : teacherId.hashCode());
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
		Manageteacher other = (Manageteacher) obj;
		if (classId == null) {
			if (other.classId != null)
				return false;
		} else if (!classId.equals(other.classId))
			return false;
		if (courseId == null) {
			if (other.courseId != null)
				return false;
		} else if (!courseId.equals(other.courseId))
			return false;
		if (examDate == null) {
			if (other.examDate != null)
				return false;
		} else if (!examDate.equals(other.examDate))
			return false;
		if (teacherId == null) {
			if (other.teacherId != null)
				return false;
		} else if (!teacherId.equals(other.teacherId))
			return false;
		return true;
	}

	
}
