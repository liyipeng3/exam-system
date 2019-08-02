package com.neusoft.root.domain;

//课程表
public class Course 
{
	private Integer courseId;  // 课程ID
	private String courseName; //课程名称
 	private String courseType;  //课程类型
 	private String courseBegin;  // 开始时间
 	private String courseEnd;  // 结束时间
 	private String courseRemark; // 描述
 	private String courseStatus; // 状态
	public Course(Integer courseId, String courseName, String courseType, String courseBegin, String courseEnd,
			String courseRemark, String courseStatus) 
	{
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseType = courseType;
		this.courseBegin = courseBegin;
		this.courseEnd = courseEnd;
		this.courseRemark = courseRemark;
		this.courseStatus = courseStatus;
	}
	public Course() {
		super();
	}
	public Integer getCourseId() {
		return courseId;
	}
	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getCourseType() {
		return courseType;
	}
	public void setCourseType(String courseType) {
		this.courseType = courseType;
	}
	public String getCourseBegin() {
		return courseBegin;
	}
	public void setCourseBegin(String courseBegin) {
		this.courseBegin = courseBegin;
	}
	public String getCourseEnd() {
		return courseEnd;
	}
	public void setCourseEnd(String courseEnd) {
		this.courseEnd = courseEnd;
	}
	public String getCourseRemark() {
		return courseRemark;
	}
	public void setCourseRemark(String courseRemark) {
		this.courseRemark = courseRemark;
	}
	public String getCourseStatus() {
		return courseStatus;
	}
	public void setCourseStatus(String courseStatus) {
		this.courseStatus = courseStatus;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((courseBegin == null) ? 0 : courseBegin.hashCode());
		result = prime * result + ((courseEnd == null) ? 0 : courseEnd.hashCode());
		result = prime * result + ((courseId == null) ? 0 : courseId.hashCode());
		result = prime * result + ((courseName == null) ? 0 : courseName.hashCode());
		result = prime * result + ((courseRemark == null) ? 0 : courseRemark.hashCode());
		result = prime * result + ((courseStatus == null) ? 0 : courseStatus.hashCode());
		result = prime * result + ((courseType == null) ? 0 : courseType.hashCode());
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
		Course other = (Course) obj;
		if (courseBegin == null) {
			if (other.courseBegin != null)
				return false;
		} else if (!courseBegin.equals(other.courseBegin))
			return false;
		if (courseEnd == null) {
			if (other.courseEnd != null)
				return false;
		} else if (!courseEnd.equals(other.courseEnd))
			return false;
		if (courseId == null) {
			if (other.courseId != null)
				return false;
		} else if (!courseId.equals(other.courseId))
			return false;
		if (courseName == null) {
			if (other.courseName != null)
				return false;
		} else if (!courseName.equals(other.courseName))
			return false;
		if (courseRemark == null) {
			if (other.courseRemark != null)
				return false;
		} else if (!courseRemark.equals(other.courseRemark))
			return false;
		if (courseStatus == null) {
			if (other.courseStatus != null)
				return false;
		} else if (!courseStatus.equals(other.courseStatus))
			return false;
		if (courseType == null) {
			if (other.courseType != null)
				return false;
		} else if (!courseType.equals(other.courseType))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Course [courseId=" + courseId + ", courseName=" + courseName + ", courseType=" + courseType
				+ ", courseBegin=" + courseBegin + ", courseEnd=" + courseEnd + ", courseRemark=" + courseRemark
				+ ", courseStatus=" + courseStatus + "]";
	}
}
