package com.neusoft.root.domain;

import java.util.ArrayList;
import java.util.List;

public class Exam 
{
	private Integer examId;  
	private Integer paperId;  //
	private String createrId; //
	private String examName; //
	private String examType;
	private Double passScore; //
	private Double sumScore;
	private String createDate; //
	private String examBegin; //
	private String examEnd; // 
	private Double examLast; //
	private String examRemark; //
	public Exam(Integer examId, Integer paperId, String createrId, String examName, String examType, Double passScore,
			Double sumScore, String createDate, String examBegin, String examEnd, Double examLast, String examRemark) {
		super();
		this.examId = examId;
		this.paperId = paperId;
		this.createrId = createrId;
		this.examName = examName;
		this.examType = examType;
		this.passScore = passScore;
		this.sumScore = sumScore;
		this.createDate = createDate;
		this.examBegin = examBegin;
		this.examEnd = examEnd;
		this.examLast = examLast;
		this.examRemark = examRemark;
	}
	public Exam() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Integer getExamId() {
		return examId;
	}
	public void setExamId(Integer examId) {
		this.examId = examId;
	}
	public Integer getPaperId() {
		return paperId;
	}
	public void setPaperId(Integer paperId) {
		this.paperId = paperId;
	}
	public String getCreaterId() {
		return createrId;
	}
	public void setCreaterId(String createrId) {
		this.createrId = createrId;
	}
	public String getExamName() {
		return examName;
	}
	public void setExamName(String examName) {
		this.examName = examName;
	}
	public String getExamType() {
		return examType;
	}
	public void setExamType(String examType) {
		this.examType = examType;
	}
	public Double getPassScore() {
		return passScore;
	}
	public void setPassScore(Double passScore) {
		this.passScore = passScore;
	}
	public Double getSumScore() {
		return sumScore;
	}
	public void setSumScore(Double sumScore) {
		this.sumScore = sumScore;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getExamBegin() {
		return examBegin;
	}
	public void setExamBegin(String examBegin) {
		this.examBegin = examBegin;
	}
	public String getExamEnd() {
		return examEnd;
	}
	public void setExamEnd(String examEnd) {
		this.examEnd = examEnd;
	}
	public Double getExamLast() {
		return examLast;
	}
	public void setExamLast(Double examLast) {
		this.examLast = examLast;
	}
	public String getExamRemark() {
		return examRemark;
	}
	public void setExamRemark(String examRemark) {
		this.examRemark = examRemark;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + ((createrId == null) ? 0 : createrId.hashCode());
		result = prime * result + ((examBegin == null) ? 0 : examBegin.hashCode());
		result = prime * result + ((examEnd == null) ? 0 : examEnd.hashCode());
		result = prime * result + ((examId == null) ? 0 : examId.hashCode());
		result = prime * result + ((examLast == null) ? 0 : examLast.hashCode());
		result = prime * result + ((examName == null) ? 0 : examName.hashCode());
		result = prime * result + ((examRemark == null) ? 0 : examRemark.hashCode());
		result = prime * result + ((examType == null) ? 0 : examType.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
		result = prime * result + ((passScore == null) ? 0 : passScore.hashCode());
		result = prime * result + ((sumScore == null) ? 0 : sumScore.hashCode());
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
		Exam other = (Exam) obj;
		if (createDate == null) {
			if (other.createDate != null)
				return false;
		} else if (!createDate.equals(other.createDate))
			return false;
		if (createrId == null) {
			if (other.createrId != null)
				return false;
		} else if (!createrId.equals(other.createrId))
			return false;
		if (examBegin == null) {
			if (other.examBegin != null)
				return false;
		} else if (!examBegin.equals(other.examBegin))
			return false;
		if (examEnd == null) {
			if (other.examEnd != null)
				return false;
		} else if (!examEnd.equals(other.examEnd))
			return false;
		if (examId == null) {
			if (other.examId != null)
				return false;
		} else if (!examId.equals(other.examId))
			return false;
		if (examLast == null) {
			if (other.examLast != null)
				return false;
		} else if (!examLast.equals(other.examLast))
			return false;
		if (examName == null) {
			if (other.examName != null)
				return false;
		} else if (!examName.equals(other.examName))
			return false;
		if (examRemark == null) {
			if (other.examRemark != null)
				return false;
		} else if (!examRemark.equals(other.examRemark))
			return false;
		if (examType == null) {
			if (other.examType != null)
				return false;
		} else if (!examType.equals(other.examType))
			return false;
		if (paperId == null) {
			if (other.paperId != null)
				return false;
		} else if (!paperId.equals(other.paperId))
			return false;
		if (passScore == null) {
			if (other.passScore != null)
				return false;
		} else if (!passScore.equals(other.passScore))
			return false;
		if (sumScore == null) {
			if (other.sumScore != null)
				return false;
		} else if (!sumScore.equals(other.sumScore))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Exam [examId=" + examId + ", paperId=" + paperId + ", createrId=" + createrId + ", examName=" + examName
				+ ", examType=" + examType + ", passScore=" + passScore + ", sumScore=" + sumScore + ", createDate="
				+ createDate + ", examBegin=" + examBegin + ", examEnd=" + examEnd + ", examLast=" + examLast
				+ ", examRemark=" + examRemark + "]";
	}

}
