package com.neusoft.root.domain;
//学生答题结果
public class Result {
	private String studentId;
	private Integer paperId;
	private String singlechoiceResult;
	private String multichoiceResult;
	private String fillResult;
	private String subjectiveResult;
	private String submitDate;
	
	public Result(String studentId, Integer paperId, String singlechoiceResult, String multichoiceResult,
			String fillResult, String subjectiveResult, String submitDate) {
		super();
		this.studentId = studentId;
		this.paperId = paperId;
		this.singlechoiceResult = singlechoiceResult;
		this.multichoiceResult = multichoiceResult;
		this.fillResult = fillResult;
		this.subjectiveResult = subjectiveResult;
		this.submitDate = submitDate;
	}

	public Result() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public Integer getPaperId() {
		return paperId;
	}

	public void setPaperId(Integer paperId) {
		this.paperId = paperId;
	}

	public String getSinglechoiceResult() {
		return singlechoiceResult;
	}

	public void setSinglechoiceResult(String singlechoiceResult) {
		this.singlechoiceResult = singlechoiceResult;
	}

	public String getMultichoiceResult() {
		return multichoiceResult;
	}

	public void setMultichoiceResult(String multichoiceResult) {
		this.multichoiceResult = multichoiceResult;
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

	public String getSubmitDate() {
		return submitDate;
	}

	public void setSubmitDate(String submitDate) {
		this.submitDate = submitDate;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fillResult == null) ? 0 : fillResult.hashCode());
		result = prime * result + ((multichoiceResult == null) ? 0 : multichoiceResult.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
		result = prime * result + ((singlechoiceResult == null) ? 0 : singlechoiceResult.hashCode());
		result = prime * result + ((studentId == null) ? 0 : studentId.hashCode());
		result = prime * result + ((subjectiveResult == null) ? 0 : subjectiveResult.hashCode());
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
		Result other = (Result) obj;
		if (fillResult == null) {
			if (other.fillResult != null)
				return false;
		} else if (!fillResult.equals(other.fillResult))
			return false;
		if (multichoiceResult == null) {
			if (other.multichoiceResult != null)
				return false;
		} else if (!multichoiceResult.equals(other.multichoiceResult))
			return false;
		if (paperId == null) {
			if (other.paperId != null)
				return false;
		} else if (!paperId.equals(other.paperId))
			return false;
		if (singlechoiceResult == null) {
			if (other.singlechoiceResult != null)
				return false;
		} else if (!singlechoiceResult.equals(other.singlechoiceResult))
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
		if (submitDate == null) {
			if (other.submitDate != null)
				return false;
		} else if (!submitDate.equals(other.submitDate))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Result [studentId=" + studentId + ", paperId=" + paperId + ", singlechoiceResult=" + singlechoiceResult
				+ ", multichoiceResult=" + multichoiceResult + ", fillResult=" + fillResult + ", subjectiveResult="
				+ subjectiveResult + ", submitDate=" + submitDate + "]";
	}
	
}
