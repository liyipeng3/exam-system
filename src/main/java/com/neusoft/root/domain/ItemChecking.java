package com.neusoft.root.domain;

import java.util.ArrayList;
import java.util.List;


public class ItemChecking
{
	private Integer itemId;
	private String itemType;
	private String itemQuestion;
	private List<String> itemOption; 
	private List<String> studentAnswer;
	private List<String> rightAnswer;
	private String remark;
	private Double itemScore;
	private Double studentScore;
	private String isRight;
	public ItemChecking(Integer itemId, String itemType, String itemQuestion, List<String> itemOption,
			List<String> studentAnswer, List<String> rightAnswer, String remark, Double itemScore, Double studentScore,
			String isRight) {
		super();
		this.itemId = itemId;
		this.itemType = itemType;
		this.itemQuestion = itemQuestion;
		this.itemOption = itemOption;
		this.studentAnswer = studentAnswer;
		this.rightAnswer = rightAnswer;
		this.remark = remark;
		this.itemScore = itemScore;
		this.studentScore = studentScore;
		this.isRight = isRight;
	}
	public ItemChecking() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Integer getItemId() {
		return itemId;
	}
	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}
	public String getItemType() {
		return itemType;
	}
	public void setItemType(String itemType) {
		this.itemType = itemType;
	}
	public String getItemQuestion() {
		return itemQuestion;
	}
	public void setItemQuestion(String itemQuestion) {
		this.itemQuestion = itemQuestion;
	}
	public List<String> getItemOption() {
		return itemOption;
	}
	public void setItemOption(List<String> itemOption) {
		this.itemOption = itemOption;
	}
	public List<String> getStudentAnswer() {
		return studentAnswer;
	}
	public void setStudentAnswer(List<String> studentAnswer) {
		this.studentAnswer = studentAnswer;
	}
	public List<String> getRightAnswer() {
		return rightAnswer;
	}
	public void setRightAnswer(List<String> rightAnswer) {
		this.rightAnswer = rightAnswer;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Double getItemScore() {
		return itemScore;
	}
	public void setItemScore(Double itemScore) {
		this.itemScore = itemScore;
	}
	public Double getStudentScore() {
		return studentScore;
	}
	public void setStudentScore(Double studentScore) {
		this.studentScore = studentScore;
	}
	public String getIsRight() {
		return isRight;
	}
	public void setIsRight(String isRight) {
		this.isRight = isRight;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((isRight == null) ? 0 : isRight.hashCode());
		result = prime * result + ((itemId == null) ? 0 : itemId.hashCode());
		result = prime * result + ((itemOption == null) ? 0 : itemOption.hashCode());
		result = prime * result + ((itemQuestion == null) ? 0 : itemQuestion.hashCode());
		result = prime * result + ((itemScore == null) ? 0 : itemScore.hashCode());
		result = prime * result + ((itemType == null) ? 0 : itemType.hashCode());
		result = prime * result + ((remark == null) ? 0 : remark.hashCode());
		result = prime * result + ((rightAnswer == null) ? 0 : rightAnswer.hashCode());
		result = prime * result + ((studentAnswer == null) ? 0 : studentAnswer.hashCode());
		result = prime * result + ((studentScore == null) ? 0 : studentScore.hashCode());
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
		ItemChecking other = (ItemChecking) obj;
		if (isRight == null) {
			if (other.isRight != null)
				return false;
		} else if (!isRight.equals(other.isRight))
			return false;
		if (itemId == null) {
			if (other.itemId != null)
				return false;
		} else if (!itemId.equals(other.itemId))
			return false;
		if (itemOption == null) {
			if (other.itemOption != null)
				return false;
		} else if (!itemOption.equals(other.itemOption))
			return false;
		if (itemQuestion == null) {
			if (other.itemQuestion != null)
				return false;
		} else if (!itemQuestion.equals(other.itemQuestion))
			return false;
		if (itemScore == null) {
			if (other.itemScore != null)
				return false;
		} else if (!itemScore.equals(other.itemScore))
			return false;
		if (itemType == null) {
			if (other.itemType != null)
				return false;
		} else if (!itemType.equals(other.itemType))
			return false;
		if (remark == null) {
			if (other.remark != null)
				return false;
		} else if (!remark.equals(other.remark))
			return false;
		if (rightAnswer == null) {
			if (other.rightAnswer != null)
				return false;
		} else if (!rightAnswer.equals(other.rightAnswer))
			return false;
		if (studentAnswer == null) {
			if (other.studentAnswer != null)
				return false;
		} else if (!studentAnswer.equals(other.studentAnswer))
			return false;
		if (studentScore == null) {
			if (other.studentScore != null)
				return false;
		} else if (!studentScore.equals(other.studentScore))
			return false;
		return true;
	}
	@Override
	public String toString() 
	{
		return "ItemChecking [itemId=" + itemId + ", itemType=" + itemType + ", itemQuestion=" + itemQuestion
				+ ", itemOption=" + itemOption + ", studentAnswer=" + studentAnswer + ", rightAnswer=" + rightAnswer
				+ ", remark=" + remark + ", itemScore=" + itemScore + ", studentScore=" + studentScore + ", isRight="
				+ isRight + "]";
	}	
}