package com.neusoft.root.domain;

import java.util.List;

import javax.print.DocFlavor.STRING;

public class ItemChecking
{
	private String itemType;
	private String itemMeg;
	private List<String> ItemOption; 
	private List<String> studentAnswer;
	private List<String> rightAnswer;
	private String remark;
	private Double itemScore;
	private Double studentScore;
	private String isRight;
	public ItemChecking(String itemType, String itemMeg, List<String> itemOption, List<String> studentAnswer,
			List<String> rightAnswer, String remark, Double itemScore, Double studentScore, String isRight) {
		super();
		this.itemType = itemType;
		this.itemMeg = itemMeg;
		ItemOption = itemOption;
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
	public String getItemType() {
		return itemType;
	}
	public void setItemType(String itemType) {
		this.itemType = itemType;
	}
	public String getItemMeg() {
		return itemMeg;
	}
	public void setItemMeg(String itemMeg) {
		this.itemMeg = itemMeg;
	}
	public List<String> getItemOption() {
		return ItemOption;
	}
	public void setItemOption(List<String> itemOption) {
		ItemOption = itemOption;
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
		result = prime * result + ((ItemOption == null) ? 0 : ItemOption.hashCode());
		result = prime * result + ((isRight == null) ? 0 : isRight.hashCode());
		result = prime * result + ((itemMeg == null) ? 0 : itemMeg.hashCode());
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
		if (ItemOption == null) {
			if (other.ItemOption != null)
				return false;
		} else if (!ItemOption.equals(other.ItemOption))
			return false;
		if (isRight == null) {
			if (other.isRight != null)
				return false;
		} else if (!isRight.equals(other.isRight))
			return false;
		if (itemMeg == null) {
			if (other.itemMeg != null)
				return false;
		} else if (!itemMeg.equals(other.itemMeg))
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
	public String toString() {
		return "ItemChecking [itemType=" + itemType + ", itemMeg=" + itemMeg + ", ItemOption=" + ItemOption
				+ ", studentAnswer=" + studentAnswer + ", rightAnswer=" + rightAnswer + ", remark=" + remark
				+ ", itemScore=" + itemScore + ", studentScore=" + studentScore + ", isRight=" + isRight + "]";
	}
}
