package com.neusoft.root.domain;

import java.util.Map;

//老师批卷后的表
public class ParsedCheck 
{
	private String studentId;  // 学生ID
	private Integer paperId; // 试卷ID 
	private String teacherId; // 老师ID
	private Map<String, Double> singlechoiceScore; //单选题得分，格式：ID1,分数1###ID2,分数2
	private Map<String, Double> multichoiceScore; //多选题得分，格式：ID1,分数1###ID2,分数2
	private Map<String, Double> fillScore; //填空题得分，格式：ID1,分数1###ID2,分数2
	private Map<String, Double> subjectiveScore; //主观题得分，格式：ID1,分数1###ID2,分数2
	private Double sumScore; //总分
	private String checkDate; // 日期
	public ParsedCheck(String studentId, Integer paperId, String teacherId, Map<String, Double> singlechoiceScore,
			Map<String, Double> multichoiceScore, Map<String, Double> fillScore, Map<String, Double> subjectiveScore,
			Double sumScore, String checkDate) {
		super();
		this.studentId = studentId;
		this.paperId = paperId;
		this.teacherId = teacherId;
		this.singlechoiceScore = singlechoiceScore;
		this.multichoiceScore = multichoiceScore;
		this.fillScore = fillScore;
		this.subjectiveScore = subjectiveScore;
		this.sumScore = sumScore;
		this.checkDate = checkDate;
	}
	public ParsedCheck() {
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
	public String getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}
	public Map<String, Double> getSinglechoiceScore() {
		return singlechoiceScore;
	}
	public void setSinglechoiceScore(Map<String, Double> singlechoiceScore) {
		this.singlechoiceScore = singlechoiceScore;
	}
	public Map<String, Double> getMultichoiceScore() {
		return multichoiceScore;
	}
	public void setMultichoiceScore(Map<String, Double> multichoiceScore) {
		this.multichoiceScore = multichoiceScore;
	}
	public Map<String, Double> getFillScore() {
		return fillScore;
	}
	public void setFillScore(Map<String, Double> fillScore) {
		this.fillScore = fillScore;
	}
	public Map<String, Double> getSubjectiveScore() {
		return subjectiveScore;
	}
	public void setSubjectiveScore(Map<String, Double> subjectiveScore) {
		this.subjectiveScore = subjectiveScore;
	}
	public Double getSumScore() {
		return sumScore;
	}
	public void setSumScore(Double sumScore) {
		this.sumScore = sumScore;
	}
	public String getCheckDate() {
		return checkDate;
	}
	public void setCheckDate(String checkDate) {
		this.checkDate = checkDate;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((checkDate == null) ? 0 : checkDate.hashCode());
		result = prime * result + ((fillScore == null) ? 0 : fillScore.hashCode());
		result = prime * result + ((multichoiceScore == null) ? 0 : multichoiceScore.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
		result = prime * result + ((singlechoiceScore == null) ? 0 : singlechoiceScore.hashCode());
		result = prime * result + ((studentId == null) ? 0 : studentId.hashCode());
		result = prime * result + ((subjectiveScore == null) ? 0 : subjectiveScore.hashCode());
		result = prime * result + ((sumScore == null) ? 0 : sumScore.hashCode());
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
		ParsedCheck other = (ParsedCheck) obj;
		if (checkDate == null) {
			if (other.checkDate != null)
				return false;
		} else if (!checkDate.equals(other.checkDate))
			return false;
		if (fillScore == null) {
			if (other.fillScore != null)
				return false;
		} else if (!fillScore.equals(other.fillScore))
			return false;
		if (multichoiceScore == null) {
			if (other.multichoiceScore != null)
				return false;
		} else if (!multichoiceScore.equals(other.multichoiceScore))
			return false;
		if (paperId == null) {
			if (other.paperId != null)
				return false;
		} else if (!paperId.equals(other.paperId))
			return false;
		if (singlechoiceScore == null) {
			if (other.singlechoiceScore != null)
				return false;
		} else if (!singlechoiceScore.equals(other.singlechoiceScore))
			return false;
		if (studentId == null) {
			if (other.studentId != null)
				return false;
		} else if (!studentId.equals(other.studentId))
			return false;
		if (subjectiveScore == null) {
			if (other.subjectiveScore != null)
				return false;
		} else if (!subjectiveScore.equals(other.subjectiveScore))
			return false;
		if (sumScore == null) {
			if (other.sumScore != null)
				return false;
		} else if (!sumScore.equals(other.sumScore))
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
		return "ParsedCheck [studentId=" + studentId + ", paperId=" + paperId + ", teacherId=" + teacherId
				+ ", singlechoiceScore=" + singlechoiceScore + ", multichoiceScore=" + multichoiceScore + ", fillScore="
				+ fillScore + ", subjectiveScore=" + subjectiveScore + ", sumScore=" + sumScore + ", checkDate="
				+ checkDate + "]";
	}
}
