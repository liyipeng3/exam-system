package com.neusoft.root.domain;

import java.util.ArrayList;
import java.util.List;

//解析后的试卷
public class ParsedPaper 
{
	private Integer paperId; //试卷ID，唯一
	private String paperName; //试卷名称，唯一
	private String createrId; //创造者ID
	private String createDate; //创造日期
	private String paperType; //试卷科目类型，例如JAVA, C++
	private Double paperIndex; //试卷难度,由题目平均难度决定
	private List<List<ParsedItem>> items;  // 试卷题目信息 一个大题一个list 包含在大list里面
	private List<String> itemsTitle;  // 大题名称
	private List<String> itemsType;  // 大题类型
	private Double paperScore; //试卷总分 
	private String paperSecrecy; //试卷保密级别，二值性：保密，公开
	private String paperRemark; // 试卷备注
	public ParsedPaper(Integer paperId, String paperName, String createrId, String createDate, String paperType,
			Double paperIndex, List<List<ParsedItem>> items, List<String> itemsTitle, List<String> itemsType,
			Double paperScore, String paperSecrecy, String paperRemark) {
		super();
		this.paperId = paperId;
		this.paperName = paperName;
		this.createrId = createrId;
		this.createDate = createDate;
		this.paperType = paperType;
		this.paperIndex = paperIndex;
		this.items = items;
		this.itemsTitle = itemsTitle;
		this.itemsType = itemsType;
		this.paperScore = paperScore;
		this.paperSecrecy = paperSecrecy;
		this.paperRemark = paperRemark;
	}
	public ParsedPaper() {
		super();
		this.items = new ArrayList<List<ParsedItem>>();
		this.itemsTitle = new ArrayList<>();
		this.itemsType = new ArrayList<>();
	}
	public Integer getPaperId() {
		return paperId;
	}
	public void setPaperId(Integer paperId) {
		this.paperId = paperId;
	}
	public String getPaperName() {
		return paperName;
	}
	public void setPaperName(String paperName) {
		this.paperName = paperName;
	}
	public String getCreaterId() {
		return createrId;
	}
	public void setCreaterId(String createrId) {
		this.createrId = createrId;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
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
	public List<List<ParsedItem>> getItems() {
		return items;
	}
	public void setItems(List<List<ParsedItem>> items) {
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
		result = prime * result + ((createrId == null) ? 0 : createrId.hashCode());
		result = prime * result + ((items == null) ? 0 : items.hashCode());
		result = prime * result + ((itemsTitle == null) ? 0 : itemsTitle.hashCode());
		result = prime * result + ((itemsType == null) ? 0 : itemsType.hashCode());
		result = prime * result + ((paperId == null) ? 0 : paperId.hashCode());
		result = prime * result + ((paperIndex == null) ? 0 : paperIndex.hashCode());
		result = prime * result + ((paperName == null) ? 0 : paperName.hashCode());
		result = prime * result + ((paperRemark == null) ? 0 : paperRemark.hashCode());
		result = prime * result + ((paperScore == null) ? 0 : paperScore.hashCode());
		result = prime * result + ((paperSecrecy == null) ? 0 : paperSecrecy.hashCode());
		result = prime * result + ((paperType == null) ? 0 : paperType.hashCode());
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
		if (createrId == null) {
			if (other.createrId != null)
				return false;
		} else if (!createrId.equals(other.createrId))
			return false;
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
		return true;
	}
	@Override
	public String toString() {
		return "ParsedPaper [paperId=" + paperId + ", paperName=" + paperName + ", createrId=" + createrId
				+ ", createDate=" + createDate + ", paperType=" + paperType + ", paperIndex=" + paperIndex + ", items="
				+ items + ", itemsTitle=" + itemsTitle + ", itemsType=" + itemsType + ", paperScore=" + paperScore
				+ ", paperSecrecy=" + paperSecrecy + ", paperRemark=" + paperRemark + "]";
	}
}
