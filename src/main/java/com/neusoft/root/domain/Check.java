package com.neusoft.root.domain;

public class Check {
	private String studentId;
	public Check(String studentId, String paperId, String teacherId, String choiceScore, String fillScore,
			String subjectiveScore, String sumScore) {
		super();
		this.studentId = studentId;
		this.paperId = paperId;
		this.teacherId = teacherId;
		this.choiceScore = choiceScore;
		this.fillScore = fillScore;
		this.subjectiveScore = subjectiveScore;
		this.sumScore = sumScore;
	}
	public Check() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getStudentId() {
		return studentId;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((choiceScore == null) ? 0 : choiceScore.hashCode());
		result = prime * result + ((fillScore == null) ? 0 : fillScore.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
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
		Check other = (Check) obj;
		if (choiceScore == null) {
			if (other.choiceScore != null)
				return false;
		} else if (!choiceScore.equals(other.choiceScore))
			return false;
		if (fillScore == null) {
			if (other.fillScore != null)
				return false;
		} else if (!fillScore.equals(other.fillScore))
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
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public String getPaperId() {
		return paperId;
	}
	public void setPaperId(String paperId) {
		this.paperId = paperId;
	}
	public String getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}
	public String getChoiceScore() {
		return choiceScore;
	}
	public void setChoiceScore(String choiceScore) {
		this.choiceScore = choiceScore;
	}
	public String getFillScore() {
		return fillScore;
	}
	public void setFillScore(String fillScore) {
		this.fillScore = fillScore;
	}
	public String getSubjectiveScore() {
		return subjectiveScore;
	}
	public void setSubjectiveScore(String subjectiveScore) {
		this.subjectiveScore = subjectiveScore;
	}
	public String getSumScore() {
		return sumScore;
	}
	public void setSumScore(String sumScore) {
		this.sumScore = sumScore;
	}
	private String paperId;
	private String teacherId;
	private String choiceScore;
	private String fillScore;
	private String subjectiveScore;
	private String sumScore;
}
