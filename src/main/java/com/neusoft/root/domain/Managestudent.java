  package com.neusoft.root.domain;

//考试安排学生表
public class Managestudent 
{
	private String classId; //教室ID
	private String studentId; //学生ID
	private String courseId; //课程ID
	private String examName; // 考试名字
	private String examBegindate; //考试开始时间
	private String examEnddate; //考试结束时间
	public Managestudent(String classId, String studentId, String courseId, String examName, String examBegindate,
			String examEnddate) {
		super();
		this.classId = classId;
		this.studentId = studentId;
		this.courseId = courseId;
		this.examName = examName;
		this.examBegindate = examBegindate;
		this.examEnddate = examEnddate;
	}
	public Managestudent() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getClassId() {
		return classId;
	}
	public void setClassId(String classId) {
		this.classId = classId;
	}
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
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
	public String getExamBegindate() {
		return examBegindate;
	}
	public void setExamBegindate(String examBegindate) {
		this.examBegindate = examBegindate;
	}
	public String getExamEnddate() {
		return examEnddate;
	}
	public void setExamEnddate(String examEnddate) {
		this.examEnddate = examEnddate;
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
		Managestudent other = (Managestudent) obj;
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
		if (studentId == null) {
			if (other.studentId != null)
				return false;
		} else if (!studentId.equals(other.studentId))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Managestudent [classId=" + classId + ", studentId=" + studentId + ", courseId=" + courseId
				+ ", examName=" + examName + ", examBegindate=" + examBegindate + ", examEnddate=" + examEnddate + "]";
	}

}
