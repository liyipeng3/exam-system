package com.neusoft.root.domain;

import java.sql.Date;
import java.util.List;

public class ParsedPaper 
{
	private String paperId; //试卷ID，唯一
	private String paperName; //试卷名称，唯一
	private String createrID;
	private Date createDate;
	private String paperType; //试卷科目类型，例如JAVA, C++
	private Double paperIndex; //试卷难度,由题目平均难度决定
	private List<RawItem> singlechoiceQuestion;  // 选择题,格式为:ID1,分数1# ID2,分数2#
	private List<RawItem> multichoiceQuestion;  // 选择题,格式为:ID1,分数1# ID2,分数2#
	private List<RawItem> fillQuestion; //填空题,格式为ID1,分数1# ID2,分数2#
	private List<RawItem> subjectiveQuestion; //主观题格式为ID1,分数1# ID2,分数2#
	private Double paperScore; //试卷总分 
	private String paperSecrecy; //试卷保密级别，二值性：保密，公开
	private String paperRemark; // 试卷备注
	public ParsedPaper(String paperId, String paperName, String createrID, Date createDate, String paperType,
			Double paperIndex, List<RawItem> singlechoiceQuestion, List<RawItem> multichoiceQuestion,
			List<RawItem> fillQuestion, List<RawItem> subjectiveQuestion, Double paperScore, String paperSecrecy,
			String paperRemark) {
		super();
		this.paperId = paperId;
		this.paperName = paperName;
		this.createrID = createrID;
		this.createDate = createDate;
		this.paperType = paperType;
		this.paperIndex = paperIndex;
		this.singlechoiceQuestion = singlechoiceQuestion;
		this.multichoiceQuestion = multichoiceQuestion;
		this.fillQuestion = fillQuestion;
		this.subjectiveQuestion = subjectiveQuestion;
		this.paperScore = paperScore;
		this.paperSecrecy = paperSecrecy;
		this.paperRemark = paperRemark;
	}
	public ParsedPaper() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getPaperId() {
		return paperId;
	}
	public void setPaperId(String paperId) {
		this.paperId = paperId;
	}
	public String getPaperName() {
		return paperName;
	}
	public void setPaperName(String paperName) {
		this.paperName = paperName;
	}
	public String getCreaterID() {
		return createrID;
	}
	public void setCreaterID(String createrID) {
		this.createrID = createrID;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
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
	public List<RawItem> getSinglechoiceQuestion() {
		return singlechoiceQuestion;
	}
	public void setSinglechoiceQuestion(List<RawItem> singlechoiceQuestion) {
		this.singlechoiceQuestion = singlechoiceQuestion;
	}
	public List<RawItem> getMultichoiceQuestion() {
		return multichoiceQuestion;
	}
	public void setMultichoiceQuestion(List<RawItem> multichoiceQuestion) {
		this.multichoiceQuestion = multichoiceQuestion;
	}
	public List<RawItem> getFillQuestion() {
		return fillQuestion;
	}
	public void setFillQuestion(List<RawItem> fillQuestion) {
		this.fillQuestion = fillQuestion;
	}
	public List<RawItem> getSubjectiveQuestion() {
		return subjectiveQuestion;
	}
	public void setSubjectiveQuestion(List<RawItem> subjectiveQuestion) {
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createDate == null) ? 0 : createDate.hashCode());
		result = prime * result + ((createrID == null) ? 0 : createrID.hashCode());
		result = prime * result + ((fillQuestion == null) ? 0 : fillQuestion.hashCode());
		result = prime * result + ((multichoiceQuestion == null) ? 0 : multichoiceQuestion.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
		result = prime * result + ((paperIndex == null) ? 0 : paperIndex.hashCode());
		result = prime * result + ((paperName == null) ? 0 : paperName.hashCode());
		result = prime * result + ((paperRemark == null) ? 0 : paperRemark.hashCode());
		result = prime * result + ((paperScore == null) ? 0 : paperScore.hashCode());
		result = prime * result + ((paperSecrecy == null) ? 0 : paperSecrecy.hashCode());
		result = prime * result + ((paperType == null) ? 0 : paperType.hashCode());
		result = prime * result + ((singlechoiceQuestion == null) ? 0 : singlechoiceQuestion.hashCode());
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
		ParsedPaper other = (ParsedPaper) obj;
		if (createDate == null) {
			if (other.createDate != null)
				return false;
		} else if (!createDate.equals(other.createDate))
			return false;
		if (createrID == null) {
			if (other.createrID != null)
				return false;
		} else if (!createrID.equals(other.createrID))
			return false;
		if (fillQuestion == null) {
			if (other.fillQuestion != null)
				return false;
		} else if (!fillQuestion.equals(other.fillQuestion))
			return false;
		if (multichoiceQuestion == null) {
			if (other.multichoiceQuestion != null)
				return false;
		} else if (!multichoiceQuestion.equals(other.multichoiceQuestion))
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
		if (paperName == null) {
			if (other.paperName != null)
				return false;
		} else if (!paperName.equals(other.paperName))
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
		if (paperType == null) {
			if (other.paperType != null)
				return false;
		} else if (!paperType.equals(other.paperType))
			return false;
		if (singlechoiceQuestion == null) {
			if (other.singlechoiceQuestion != null)
				return false;
		} else if (!singlechoiceQuestion.equals(other.singlechoiceQuestion))
			return false;
		if (subjectiveQuestion == null) {
			if (other.subjectiveQuestion != null)
				return false;
		} else if (!subjectiveQuestion.equals(other.subjectiveQuestion))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "ParsedPaper [paperId=" + paperId + ", paperName=" + paperName + ", createrID=" + createrID
				+ ", createDate=" + createDate + ", paperType=" + paperType + ", paperIndex=" + paperIndex
				+ ", singlechoiceQuestion=" + singlechoiceQuestion + ", multichoiceQuestion=" + multichoiceQuestion
				+ ", fillQuestion=" + fillQuestion + ", subjectiveQuestion=" + subjectiveQuestion + ", paperScore="
				+ paperScore + ", paperSecrecy=" + paperSecrecy + ", paperRemark=" + paperRemark + "]";
	}
}
