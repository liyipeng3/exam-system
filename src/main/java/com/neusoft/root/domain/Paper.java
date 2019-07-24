package com.neusoft.root.domain;

public class Paper {
	private String paperId; //试卷ID，唯一
	private String paperType; //试卷科目类型，例如JAVA, C++
	private Double paperIndex; //试卷难度,由题目平均难度决定
	private String choiceQuestion;  // 选择题,格式为:ID1,分数1# ID2,分数2#
	private String fillQuestion; //填空题,格式为ID1,分数1# ID2,分数2#
	private String subjectiveQuestion; //主观题格式为ID1,分数1# ID2,分数2#
	private Double paperScore; //试卷总分 
	private String paperSecrecy; //试卷保密级别，二值性：保密，公开
	private String paperRemark; // 试卷备注
	
	public String getPaperId() {
		return paperId;
	}
	public void setPaperId(String paperId) {
		this.paperId = paperId;
	}
	public String getPaperType() {
		return paperType;
	}
	public void setPaperType(String paperType) {
		this.paperType = paperType;
	}
	public Double getPaperIndex() {
		return paperIndex;
	}
	public void setPaperIndex(Double paperIndex) {
		this.paperIndex = paperIndex;
	}
	public String getChoiceQuestion() {
		return choiceQuestion;
	}
	public void setChoiceQuestion(String choiceQuestion) {
		this.choiceQuestion = choiceQuestion;
	}
	public String getFillQuestion() {
		return fillQuestion;
	}
	public void setFillQuestion(String fillQuestion) {
		this.fillQuestion = fillQuestion;
	}
	public String getSubjectiveQuestion() {
		return subjectiveQuestion;
	}
	public void setSubjectiveQuestion(String subjectiveQuestion) {
		this.subjectiveQuestion = subjectiveQuestion;
	}
	public Double getPaperScore() {
		return paperScore;
	}
	public void setPaperScore(Double paperScore) {
		this.paperScore = paperScore;
	}
	public String getPaperSecrecy() {
		return paperSecrecy;
	}
	public void setPaperSecrecy(String paperSecrecy) {
		this.paperSecrecy = paperSecrecy;
	}
	public String getPaperRemark() {
		return paperRemark;
	}
	public void setPaperRemark(String paperRemark) {
		this.paperRemark = paperRemark;
	}
	public Paper(String paperId, String paperType, Double paperIndex, String choiceQuestion, String fillQuestion,
			String subjectiveQuestion, Double paperScore, String paperSecrecy, String paperRemark) {
		super();
		this.paperId = paperId;
		this.paperType = paperType;
		this.paperIndex = paperIndex;
		this.choiceQuestion = choiceQuestion;
		this.fillQuestion = fillQuestion;
		this.subjectiveQuestion = subjectiveQuestion;
		this.paperScore = paperScore;
		this.paperSecrecy = paperSecrecy;
		this.paperRemark = paperRemark;
	}
	public Paper() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((choiceQuestion == null) ? 0 : choiceQuestion.hashCode());
		result = prime * result + ((paperType == null) ? 0 : paperType.hashCode());
		result = prime * result + ((fillQuestion == null) ? 0 : fillQuestion.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
		result = prime * result + ((paperIndex == null) ? 0 : paperIndex.hashCode());
		result = prime * result + ((paperRemark == null) ? 0 : paperRemark.hashCode());
		result = prime * result + ((paperScore == null) ? 0 : paperScore.hashCode());
		result = prime * result + ((paperSecrecy == null) ? 0 : paperSecrecy.hashCode());
		result = prime * result + ((subjectiveQuestion == null) ? 0 : subjectiveQuestion.hashCode());
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
		Paper other = (Paper) obj;
		if (choiceQuestion == null) {
			if (other.choiceQuestion != null)
				return false;
		} else if (!choiceQuestion.equals(other.choiceQuestion))
			return false;
		if (paperType == null) {
			if (other.paperType != null)
				return false;
		} else if (!paperType.equals(other.paperType))
			return false;
		if (fillQuestion == null) {
			if (other.fillQuestion != null)
				return false;
		} else if (!fillQuestion.equals(other.fillQuestion))
			return false;
		if (paperId == null) {
			if (other.paperId != null)
				return false;
		} else if (!paperId.equals(other.paperId))
			return false;
		if (paperIndex == null) {
			if (other.paperIndex != null)
				return false;
		} else if (!paperIndex.equals(other.paperIndex))
			return false;
		if (paperRemark == null) {
			if (other.paperRemark != null)
				return false;
		} else if (!paperRemark.equals(other.paperRemark))
			return false;
		if (paperScore == null) {
			if (other.paperScore != null)
				return false;
		} else if (!paperScore.equals(other.paperScore))
			return false;
		if (paperSecrecy == null) {
			if (other.paperSecrecy != null)
				return false;
		} else if (!paperSecrecy.equals(other.paperSecrecy))
			return false;
		if (subjectiveQuestion == null) {
			if (other.subjectiveQuestion != null)
				return false;
		} else if (!subjectiveQuestion.equals(other.subjectiveQuestion))
			return false;
		return true;
	}
	
}
