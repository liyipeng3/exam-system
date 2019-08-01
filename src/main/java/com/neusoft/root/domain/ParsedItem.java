package com.neusoft.root.domain;

import java.util.List;

//解析后的题目
public class ParsedItem 
{
	private Integer itemId; 				//题目ID
	private String createrId;  				//创作者ID
	private String itemDate; 				//创造日期
	private String itemCoursetype;  		// 题目类型，java，c++
	private String itemType; 				//题目类型，多选题，单选题，填空题，主观题
	private Double itemIndex; 				//试题难度 
	private String itemQuestion; 			//试题题干
	private List<String> itemOption; 		//试题选项
	private List<String> itemAnswer; 		//试题答案
	private String itemPicture; 			//试题路径
	private Double itemScore; 				//试题分数
	private String itemParse; 				//题目解析 
	
	public Integer getItemId() {
		return itemId;
	}
	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}
	public String getCreaterId() {
		return createrId;
	}
	public void setCreaterId(String createrId) {
		this.createrId = createrId;
	}
	public String getItemDate() {
		return itemDate;
	}
	public void setItemDate(String itemDate) {
		this.itemDate = itemDate;
	}
	public String getItemCoursetype() {
		return itemCoursetype;
	}
	public void setItemCoursetype(String itemCoursetype) {
		this.itemCoursetype = itemCoursetype;
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
	public List<String> getItemOption() {
		return itemOption;
	}
	public void setItemOption(List<String> itemOption) {
		this.itemOption = itemOption;
	}
	public List<String> getItemAnswer() {
		return itemAnswer;
	}
	public void setItemAnswer(List<String> itemAnswer) {
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
	public String getItemParse() {
		return itemParse;
	}
	public void setItemParse(String itemParse) {
		this.itemParse = itemParse;
	}
	public ParsedItem(Integer itemId, String createrId, String itemDate, String itemCoursetype, String itemType,
			Double itemIndex, String itemQuestion, List<String> itemOption, List<String> itemAnswer, String itemPicture,
			Double itemScore, String itemParse) {
		super();
		this.itemId = itemId;
		this.createrId = createrId;
		this.itemDate = itemDate;
		this.itemCoursetype = itemCoursetype;
		this.itemType = itemType;
		this.itemIndex = itemIndex;
		this.itemQuestion = itemQuestion;
		this.itemOption = itemOption;
		this.itemAnswer = itemAnswer;
		this.itemPicture = itemPicture;
		this.itemScore = itemScore;
		this.itemParse = itemParse;
	}
	public ParsedItem() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createrId == null) ? 0 : createrId.hashCode());
		result = prime * result + ((itemAnswer == null) ? 0 : itemAnswer.hashCode());
		result = prime * result + ((itemCoursetype == null) ? 0 : itemCoursetype.hashCode());
		result = prime * result + ((itemDate == null) ? 0 : itemDate.hashCode());
		result = prime * result + ((itemId == null) ? 0 : itemId.hashCode());
		result = prime * result + ((itemIndex == null) ? 0 : itemIndex.hashCode());
		result = prime * result + ((itemOption == null) ? 0 : itemOption.hashCode());
		result = prime * result + ((itemParse == null) ? 0 : itemParse.hashCode());
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
		ParsedItem other = (ParsedItem) obj;
		if (createrId == null) {
			if (other.createrId != null)
				return false;
		} else if (!createrId.equals(other.createrId))
			return false;
		if (itemAnswer == null) {
			if (other.itemAnswer != null)
				return false;
		} else if (!itemAnswer.equals(other.itemAnswer))
			return false;
		if (itemCoursetype == null) {
			if (other.itemCoursetype != null)
				return false;
		} else if (!itemCoursetype.equals(other.itemCoursetype))
			return false;
		if (itemDate == null) {
			if (other.itemDate != null)
				return false;
		} else if (!itemDate.equals(other.itemDate))
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
		if (itemParse == null) {
			if (other.itemParse != null)
				return false;
		} else if (!itemParse.equals(other.itemParse))
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
	@Override
	public String toString() {
		return "ParsedItem [itemId=" + itemId + ", createrId=" + createrId + ", itemDate=" + itemDate
				+ ", itemCoursetype=" + itemCoursetype + ", itemType=" + itemType + ", itemIndex=" + itemIndex
				+ ", itemQuestion=" + itemQuestion + ", itemOption=" + itemOption + ", itemAnswer=" + itemAnswer
				+ ", itemPicture=" + itemPicture + ", itemScore=" + itemScore + ", itemParse=" + itemParse + "]";
	}

	
	
}
