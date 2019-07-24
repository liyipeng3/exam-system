package com.neusoft.root.domain;
//学生答题结果
public class Result {
	private String studentId;
	private String paperId;
	private String choiceResult;
	private String fillResult;
	private String subjectiveResult;
	@Override
	public String toString() {
		return "Result [studentId=" + studentId + ", paperId=" + paperId + ", choiceResult=" + choiceResult
				+ ", fillResult=" + fillResult + ", subjectiveResult=" + subjectiveResult + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((choiceResult == null) ? 0 : choiceResult.hashCode());
		result = prime * result + ((fillResult == null) ? 0 : fillResult.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
		result = prime * result + ((studentId == null) ? 0 : studentId.hashCode());
		result = prime * result + ((subjectiveResult == null) ? 0 : subjectiveResult.hashCode());
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
		Result other = (Result) obj;
		if (choiceResult == null) {
			if (other.choiceResult != null)
				return false;
		} else if (!choiceResult.equals(other.choiceResult))
			return false;
		if (fillResult == null) {
			if (other.fillResult != null)
				return false;
		} else if (!fillResult.equals(other.fillResult))
			return false;
		if (paperId == null) {
			if (other.paperId != null)
				return false;
		} else if (!paperId.equals(other.paperId))
			return false;
		if (studentId == null) {
			if (other.studentId != null)
				return false;
		} else if (!studentId.equals(other.studentId))
			return false;
		if (subjectiveResult == null) {
			if (other.subjectiveResult != null)
				return false;
		} else if (!subjectiveResult.equals(other.subjectiveResult))
			return false;
		return true;
	}
	public Result() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Result(String studentId, String paperId, String choiceResult, String fillResult, String subjectiveResult) {
		super();
		this.studentId = studentId;
		this.paperId = paperId;
		this.choiceResult = choiceResult;
		this.fillResult = fillResult;
		this.subjectiveResult = subjectiveResult;
	}
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public String getPaperId() {
		return paperId;
	}
	public void setPaperId(String paperId) {
		this.paperId = paperId;
	}
	public String getChoiceResult() {
		return choiceResult;
	}
	public void setChoiceResult(String choiceResult) {
		this.choiceResult = choiceResult;
	}
	public String getFillResult() {
		return fillResult;
	}
	public void setFillResult(String fillResult) {
		this.fillResult = fillResult;
	}
	public String getSubjectiveResult() {
		return subjectiveResult;
	}
	public void setSubjectiveResult(String subjectiveResult) {
		this.subjectiveResult = subjectiveResult;
	}
}
