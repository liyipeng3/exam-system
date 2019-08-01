package com.neusoft.root.domain;

//管理员表
public class StudentResult {
	private String studentId;
	private String studentName;
	private String studentSchool;
	private String submitDate;
	private Double examScore;
	public StudentResult(String studentId, String studentName, String studentSchool, String submitDate,
			Double examScore) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentSchool = studentSchool;
		this.submitDate = submitDate;
		this.examScore = examScore;
	}
	public StudentResult() {
		super();
		// TODO Auto-generated constructor stub
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
	public String getStudentSchool() {
		return studentSchool;
	}
	public void setStudentSchool(String studentSchool) {
		this.studentSchool = studentSchool;
	}
	public String getSubmitDate() {
		return submitDate;
	}
	public void setSubmitDate(String submitDate) {
		this.submitDate = submitDate;
	}
	public Double getExamScore() {
		return examScore;
	}
	public void setExamScore(Double examScore) {
		this.examScore = examScore;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((examScore == null) ? 0 : examScore.hashCode());
		result = prime * result + ((studentId == null) ? 0 : studentId.hashCode());
		result = prime * result + ((studentName == null) ? 0 : studentName.hashCode());
		result = prime * result + ((studentSchool == null) ? 0 : studentSchool.hashCode());
		result = prime * result + ((submitDate == null) ? 0 : submitDate.hashCode());
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
		StudentResult other = (StudentResult) obj;
		if (examScore == null) {
			if (other.examScore != null)
				return false;
		} else if (!examScore.equals(other.examScore))
			return false;
		if (studentId == null) {
			if (other.studentId != null)
				return false;
		} else if (!studentId.equals(other.studentId))
			return false;
		if (studentName == null) {
			if (other.studentName != null)
				return false;
		} else if (!studentName.equals(other.studentName))
			return false;
		if (studentSchool == null) {
			if (other.studentSchool != null)
				return false;
		} else if (!studentSchool.equals(other.studentSchool))
			return false;
		if (submitDate == null) {
			if (other.submitDate != null)
				return false;
		} else if (!submitDate.equals(other.submitDate))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "StudentResult [studentId=" + studentId + ", studentName=" + studentName + ", studentSchool="
				+ studentSchool + ", submitDate=" + submitDate + ", examScore=" + examScore + "]";
	}
}
	
