package com.neusoft.root.domain;

import java.util.Map;

//学生答题结果
public class ParseResult {
	private String studentId; //学生ID
	private Integer paperId; //试卷ID
	private Map<String, Double> singlechoiceResult; //单选题结果，格式：ID1，分数1###ID2，分数2###
	private Map<String, Double> multichoiceResult; //多选题结果，格式：ID1，分数1###ID2，分数2###
	private Map<String, Double> fillResult; //填空题结果，格式：ID1，分数1###ID2，分数2###
	private Map<String, Double> subjectiveResult; // 主观题结果，格式：ID1，分数1###ID2，分数2###
	private Map<String, Double> submitDate; //答题日期
	public ParseResult(String studentId, Integer paperId, Map<String, Double> singlechoiceResult,
			Map<String, Double> multichoiceResult, Map<String, Double> fillResult, Map<String, Double> subjectiveResult,
			Map<String, Double> submitDate) {
		
		
		super();
		this.studentId = studentId;
		this.paperId = paperId;
		this.singlechoiceResult = singlechoiceResult;
		this.multichoiceResult = multichoiceResult;
		this.fillResult = fillResult;
		this.subjectiveResult = subjectiveResult;
		this.submitDate = submitDate;
	}
	public ParseResult() {
		super();
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
	public Map<String, Double> getSinglechoiceResult() {
		return singlechoiceResult;
	}
	public void setSinglechoiceResult(Map<String, Double> singlechoiceResult) {
		this.singlechoiceResult = singlechoiceResult;
	}
	public Map<String, Double> getMultichoiceResult() {
		return multichoiceResult;
	}
	public void setMultichoiceResult(Map<String, Double> multichoiceResult) {
		this.multichoiceResult = multichoiceResult;
	}
	public Map<String, Double> getFillResult() {
		return fillResult;
	}
	public void setFillResult(Map<String, Double> fillResult) {
		this.fillResult = fillResult;
	}
	public Map<String, Double> getSubjectiveResult() {
		return subjectiveResult;
	}
	public void setSubjectiveResult(Map<String, Double> subjectiveResult) {
		this.subjectiveResult = subjectiveResult;
	}
	public Map<String, Double> getSubmitDate() {
		return submitDate;
	}
	public void setSubmitDate(Map<String, Double> submitDate) {
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
		ParseResult other = (ParseResult) obj;
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
		return "ParseResult [studentId=" + studentId + ", paperId=" + paperId + ", singlechoiceResult="
				+ singlechoiceResult + ", multichoiceResult=" + multichoiceResult + ", fillResult=" + fillResult
				+ ", subjectiveResult=" + subjectiveResult + ", submitDate=" + submitDate + "]";
	}
}
