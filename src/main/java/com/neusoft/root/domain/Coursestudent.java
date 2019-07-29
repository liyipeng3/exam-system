package com.neusoft.root.domain;

//课程To学生表
public class Coursestudent 
{
	private String courseId; //课程ID
	private String studentId; //学生ID
	public String getCourseId() {
		return courseId;
	}
	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public Coursestudent() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Coursestudent(String courseId, String studentId) {
		super();
		this.courseId = courseId;
		this.studentId = studentId;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((courseId == null) ? 0 : courseId.hashCode());
		result = prime * result + ((studentId == null) ? 0 : studentId.hashCode());
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
		Coursestudent other = (Coursestudent) obj;
		if (courseId == null) {
			if (other.courseId != null)
				return false;
		} else if (!courseId.equals(other.courseId))
			return false;
		if (studentId == null) {
			if (other.studentId != null)
				return false;
		} else if (!studentId.equals(other.studentId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Coursestudent [courseId=" + courseId + ", studentId=" + studentId + "]";

	}
	
}
