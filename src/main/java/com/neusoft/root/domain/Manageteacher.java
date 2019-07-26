package com.neusoft.root.domain;

import java.sql.Date;

public class Manageteacher {
	private String classId;
	private String teacherId;
	private String courseId;
	private String examDate;
	
	public Manageteacher(String classId, String teacherId, String courseId, String examDate) {
		super();
		this.classId = classId;
		this.teacherId = teacherId;
		this.courseId = courseId;
		this.examDate = examDate;
	}
	
	
	public Manageteacher() {
		super();
	}

	public String getClassId() {
		return classId;
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

	public String getExamName() {
		return examName;

	}
	public void setExamName(String examName) {
		this.examName = examName;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((classId == null) ? 0 : classId.hashCode());
		result = prime * result + ((courseId == null) ? 0 : courseId.hashCode());
		result = prime * result + ((examBegindate == null) ? 0 : examBegindate.hashCode());
		result = prime * result + ((examEnddate == null) ? 0 : examEnddate.hashCode());
		result = prime * result + ((examName == null) ? 0 : examName.hashCode());
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
		if (examBegindate == null) {
			if (other.examBegindate != null)
				return false;
		} else if (!examBegindate.equals(other.examBegindate))
			return false;
		if (examEnddate == null) {
			if (other.examEnddate != null)
				return false;
		} else if (!examEnddate.equals(other.examEnddate))
			return false;
		if (examName == null) {
			if (other.examName != null)
				return false;
		} else if (!examName.equals(other.examName))
			return false;
		if (teacherId == null) {
			if (other.teacherId != null)
				return false;
		} else if (!teacherId.equals(other.teacherId))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "Manageteacher [classId=" + classId + ", teacherId=" + teacherId + ", courseId=" + courseId
				+ ", examName=" + examName + ", examBegindate=" + examBegindate + ", examEnddate=" + examEnddate + "]";
	}
	

}
