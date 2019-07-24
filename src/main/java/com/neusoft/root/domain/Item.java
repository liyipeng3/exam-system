package com.neusoft.root.domain;

//题库
public class Item {
	private String itemId; //题目ID
	private String itemCourseType;  // 题目类型，java，c++
	private String itemType; //题目类型，多选题，单选题，填空题，主观题
	private Double itemIndex; //试题难度 
	private String itemQuestion; //试题题干
	private String itemOption; //试题问题
	private String itemAnswer; //试题答案
	private String itemPicture; //试题路径
	@Override
	public String toString() {
		return "Item [itemId=" + itemId + ", itemCourseType=" + itemCourseType + ", itemType=" + itemType
				+ ", itemIndex=" + itemIndex + ", itemQuestion=" + itemQuestion + ", itemOption=" + itemOption
				+ ", itemAnswer=" + itemAnswer + ", itemPicture=" + itemPicture + ", itemScore=" + itemScore + "]";
	}
	private Double itemScore; //提示分数 
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((itemAnswer == null) ? 0 : itemAnswer.hashCode());
		result = prime * result + ((itemCourseType == null) ? 0 : itemCourseType.hashCode());
		result = prime * result + ((itemId == null) ? 0 : itemId.hashCode());
		result = prime * result + ((itemIndex == null) ? 0 : itemIndex.hashCode());
		result = prime * result + ((itemOption == null) ? 0 : itemOption.hashCode());
		result = prime * result + ((itemPicture == null) ? 0 : itemPicture.hashCode());
		result = prime * result + ((itemQuestion == null) ? 0 : itemQuestion.hashCode());
		result = prime * result + ((itemScore == null) ? 0 : itemScore.hashCode());
		result = prime * result + ((itemType == null) ? 0 : itemType.hashCode());
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
		Item other = (Item) obj;
		if (itemAnswer == null) {
			if (other.itemAnswer != null)
				return false;
		} else if (!itemAnswer.equals(other.itemAnswer))
			return false;
		if (itemCourseType == null) {
			if (other.itemCourseType != null)
				return false;
		} else if (!itemCourseType.equals(other.itemCourseType))
			return false;
		if (itemId == null) {
			if (other.itemId != null)
				return false;
		} else if (!itemId.equals(other.itemId))
			return false;
		if (itemIndex == null) {
			if (other.itemIndex != null)
				return false;
		} else if (!itemIndex.equals(other.itemIndex))
			return false;
		if (itemOption == null) {
			if (other.itemOption != null)
				return false;
		} else if (!itemOption.equals(other.itemOption))
			return false;
		if (itemPicture == null) {
			if (other.itemPicture != null)
				return false;
		} else if (!itemPicture.equals(other.itemPicture))
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
		return true;
	}
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Item(String itemId, String itemCourseType, String itemType, Double itemIndex, String itemQuestion,
			String itemOption, String itemAnswer, String itemPicture, Double itemScore) {
		super();
		this.itemId = itemId;
		this.itemCourseType = itemCourseType;
		this.itemType = itemType;
		this.itemIndex = itemIndex;
		this.itemQuestion = itemQuestion;
		this.itemOption = itemOption;
		this.itemAnswer = itemAnswer;
		this.itemPicture = itemPicture;
		this.itemScore = itemScore;
	}
	public String getItemId() {
		return itemId;
	}
	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
	public String getItemCourseType() {
		return itemCourseType;
	}
	public void setItemCourseType(String itemCourseType) {
		this.itemCourseType = itemCourseType;
	}
	public String getItemType() {
		return itemType;
	}
	public void setItemType(String itemType) {
		this.itemType = itemType;
	}
	public Double getItemIndex() {
		return itemIndex;
	}
	public void setItemIndex(Double itemIndex) {
		this.itemIndex = itemIndex;
	}
	public String getItemQuestion() {
		return itemQuestion;
	}
	public void setItemQuestion(String itemQuestion) {
		this.itemQuestion = itemQuestion;
	}
	public String getItemOption() {
		return itemOption;
	}
	public void setItemOption(String itemOption) {
		this.itemOption = itemOption;
	}
	public String getItemAnswer() {
		return itemAnswer;
	}
	public void setItemAnswer(String itemAnswer) {
		this.itemAnswer = itemAnswer;
	}
	public String getItemPicture() {
		return itemPicture;
	}
	public void setItemPicture(String itemPicture) {
		this.itemPicture = itemPicture;
	}
	public Double getItemScore() {
		return itemScore;
	}
	public void setItemScore(Double itemScore) {
		this.itemScore = itemScore;
	}
	
}
