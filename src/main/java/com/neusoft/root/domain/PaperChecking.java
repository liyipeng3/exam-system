package com.neusoft.root.domain;

import java.util.ArrayList;
import java.util.List;

public class PaperChecking
{
	private String studentId;
	private Integer paperId;
	private String teacherId;
	private List<ItemChecking> singleItem;
	private List<ItemChecking> multiItem;
	private List<ItemChecking> fillItem;
	private List<ItemChecking> subjectiveItem;
	private Double studentScore;
	private Double sumScore;
	public PaperChecking(String studentId, Integer paperId, String teacherId, List<ItemChecking> singleItem,
			List<ItemChecking> multiItem, List<ItemChecking> fillItem, List<ItemChecking> subjectiveItem,
			Double studentScore, Double sumScore) {
		super();
		this.studentId = studentId;
		this.paperId = paperId;
		this.teacherId = teacherId;
		this.singleItem = singleItem;
		this.multiItem = multiItem;
		this.fillItem = fillItem;
		this.subjectiveItem = subjectiveItem;
		this.studentScore = studentScore;
		this.sumScore = sumScore;
	}
	public PaperChecking() {
		super();
		this.singleItem = new ArrayList<>();
		this.multiItem = new ArrayList<>();
		this.fillItem = new ArrayList<>();
		this.subjectiveItem = new ArrayList<>();
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
	public List<ItemChecking> getSingleItem() {
		return singleItem;
	}
	public void setSingleItem(List<ItemChecking> singleItem) {
		this.singleItem = singleItem;
	}
	public List<ItemChecking> getMultiItem() {
		return multiItem;
	}
	public void setMultiItem(List<ItemChecking> multiItem) {
		this.multiItem = multiItem;
	}
	public List<ItemChecking> getFillItem() {
		return fillItem;
	}
	public void setFillItem(List<ItemChecking> fillItem) {
		this.fillItem = fillItem;
	}
	public List<ItemChecking> getSubjectiveItem() {
		return subjectiveItem;
	}
	public void setSubjectiveItem(List<ItemChecking> subjectiveItem) {
		this.subjectiveItem = subjectiveItem;
	}
	public Double getStudentScore() {
		return studentScore;
	}
	public void setStudentScore(Double studentScore) {
		this.studentScore = studentScore;
	}
	public Double getSumScore() {
		return sumScore;
	}
	public void setSumScore(Double sumScore) {
		this.sumScore = sumScore;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fillItem == null) ? 0 : fillItem.hashCode());
		result = prime * result + ((multiItem == null) ? 0 : multiItem.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
		result = prime * result + ((singleItem == null) ? 0 : singleItem.hashCode());
		result = prime * result + ((studentId == null) ? 0 : studentId.hashCode());
		result = prime * result + ((studentScore == null) ? 0 : studentScore.hashCode());
		result = prime * result + ((subjectiveItem == null) ? 0 : subjectiveItem.hashCode());
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
		PaperChecking other = (PaperChecking) obj;
		if (fillItem == null) {
			if (other.fillItem != null)
				return false;
		} else if (!fillItem.equals(other.fillItem))
			return false;
		if (multiItem == null) {
			if (other.multiItem != null)
				return false;
		} else if (!multiItem.equals(other.multiItem))
			return false;
		if (paperId == null) {
			if (other.paperId != null)
				return false;
		} else if (!paperId.equals(other.paperId))
			return false;
		if (singleItem == null) {
			if (other.singleItem != null)
				return false;
		} else if (!singleItem.equals(other.singleItem))
			return false;
		if (studentId == null) {
			if (other.studentId != null)
				return false;
		} else if (!studentId.equals(other.studentId))
			return false;
		if (studentScore == null) {
			if (other.studentScore != null)
				return false;
		} else if (!studentScore.equals(other.studentScore))
			return false;
		if (subjectiveItem == null) {
			if (other.subjectiveItem != null)
				return false;
		} else if (!subjectiveItem.equals(other.subjectiveItem))
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
		return "PaperChecking [studentId=" + studentId + ", paperId=" + paperId + ", teacherId=" + teacherId
				+ ", singleItem=" + singleItem + ", multiItem=" + multiItem + ", fillItem=" + fillItem
				+ ", subjectiveItem=" + subjectiveItem + ", studentScore=" + studentScore + ", sumScore=" + sumScore
				+ "]";
	}
}
