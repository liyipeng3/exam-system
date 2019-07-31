package com.neusoft.root.domain;

import java.util.ArrayList;
import java.util.List;

public class PaperChecking
{
	private String studentId;
	private String paperId;
	private String teacherId;
	private List<List<ItemChecking>> items;
	private List<String> itemsTitle;
	private List<String> itemsType;
	private Double studentScore;
	private Double sumScore;
	public PaperChecking(String studentId, String paperId, String teacherId, List<List<ItemChecking>> items,
			List<String> itemsTitle, List<String> itemsType, Double studentScore, Double sumScore) {
		super();
		this.studentId = studentId;
		this.paperId = paperId;
		this.teacherId = teacherId;
		this.items = items;
		this.itemsTitle = itemsTitle;
		this.itemsType = itemsType;
		this.studentScore = studentScore;
		this.sumScore = sumScore;
	}
	public PaperChecking() {
		super();
		// TODO Auto-generated constructor stub
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
	public String getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}
	public List<List<ItemChecking>> getItems() {
		return items;
	}
	public void setItems(List<List<ItemChecking>> items) {
		this.items = items;
	}
	public List<String> getItemsTitle() {
		return itemsTitle;
	}
	public void setItemsTitle(List<String> itemsTitle) {
		this.itemsTitle = itemsTitle;
	}
	public List<String> getItemsType() {
		return itemsType;
	}
	public void setItemsType(List<String> itemsType) {
		this.itemsType = itemsType;
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
		result = prime * result + ((items == null) ? 0 : items.hashCode());
		result = prime * result + ((itemsTitle == null) ? 0 : itemsTitle.hashCode());
		result = prime * result + ((itemsType == null) ? 0 : itemsType.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
		result = prime * result + ((studentId == null) ? 0 : studentId.hashCode());
		result = prime * result + ((studentScore == null) ? 0 : studentScore.hashCode());
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
		if (items == null) {
			if (other.items != null)
				return false;
		} else if (!items.equals(other.items))
			return false;
		if (itemsTitle == null) {
			if (other.itemsTitle != null)
				return false;
		} else if (!itemsTitle.equals(other.itemsTitle))
			return false;
		if (itemsType == null) {
			if (other.itemsType != null)
				return false;
		} else if (!itemsType.equals(other.itemsType))
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
		if (studentScore == null) {
			if (other.studentScore != null)
				return false;
		} else if (!studentScore.equals(other.studentScore))
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
				+ ", items=" + items + ", itemsTitle=" + itemsTitle + ", itemsType=" + itemsType + ", studentScore="
				+ studentScore + ", sumScore=" + sumScore + "]";
	}
}
