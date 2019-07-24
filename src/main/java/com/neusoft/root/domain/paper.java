package com.neusoft.root.domain;

public class paper {
	private String paper_id;
	private String paper_type;
	private Double paper_index;
	private String choice_question;
	private String fill_question;
	private String subjective_question;
	private Double paper_score;
	private String paper_secrecy;
	private String paper_remark;
	public String getPaper_id() {
		return paper_id;
	}
	public void setPaper_id(String paper_id) {
		this.paper_id = paper_id;
	}
	public String getpaper_type() {
		return paper_type;
	}
	public void setpaper_type(String paper_type) {
		this.paper_type = paper_type;
	}
	public Double getPaper_index() {
		return paper_index;
	}
	public void setPaper_index(Double paper_index) {
		this.paper_index = paper_index;
	}
	public String getChoice_question() {
		return choice_question;
	}
	public void setChoice_question(String choice_question) {
		this.choice_question = choice_question;
	}
	public String getFill_question() {
		return fill_question;
	}
	public void setFill_question(String fill_question) {
		this.fill_question = fill_question;
	}
	public String getSubjective_question() {
		return subjective_question;
	}
	public void setSubjective_question(String subjective_question) {
		this.subjective_question = subjective_question;
	}
	public Double getPaper_score() {
		return paper_score;
	}
	public void setPaper_score(Double paper_score) {
		this.paper_score = paper_score;
	}
	public String getPaper_secrecy() {
		return paper_secrecy;
	}
	public void setPaper_secrecy(String paper_secrecy) {
		this.paper_secrecy = paper_secrecy;
	}
	public String getPaper_remark() {
		return paper_remark;
	}
	public void setPaper_remark(String paper_remark) {
		this.paper_remark = paper_remark;
	}
	public paper(String paper_id, String paper_type, Double paper_index, String choice_question, String fill_question,
			String subjective_question, Double paper_score, String paper_secrecy, String paper_remark) {
		super();
		this.paper_id = paper_id;
		this.paper_type = paper_type;
		this.paper_index = paper_index;
		this.choice_question = choice_question;
		this.fill_question = fill_question;
		this.subjective_question = subjective_question;
		this.paper_score = paper_score;
		this.paper_secrecy = paper_secrecy;
		this.paper_remark = paper_remark;
	}
	public paper() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((choice_question == null) ? 0 : choice_question.hashCode());
		result = prime * result + ((paper_type == null) ? 0 : paper_type.hashCode());
		result = prime * result + ((fill_question == null) ? 0 : fill_question.hashCode());
		result = prime * result + ((paper_id == null) ? 0 : paper_id.hashCode());
		result = prime * result + ((paper_index == null) ? 0 : paper_index.hashCode());
		result = prime * result + ((paper_remark == null) ? 0 : paper_remark.hashCode());
		result = prime * result + ((paper_score == null) ? 0 : paper_score.hashCode());
		result = prime * result + ((paper_secrecy == null) ? 0 : paper_secrecy.hashCode());
		result = prime * result + ((subjective_question == null) ? 0 : subjective_question.hashCode());
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
		paper other = (paper) obj;
		if (choice_question == null) {
			if (other.choice_question != null)
				return false;
		} else if (!choice_question.equals(other.choice_question))
			return false;
		if (paper_type == null) {
			if (other.paper_type != null)
				return false;
		} else if (!paper_type.equals(other.paper_type))
			return false;
		if (fill_question == null) {
			if (other.fill_question != null)
				return false;
		} else if (!fill_question.equals(other.fill_question))
			return false;
		if (paper_id == null) {
			if (other.paper_id != null)
				return false;
		} else if (!paper_id.equals(other.paper_id))
			return false;
		if (paper_index == null) {
			if (other.paper_index != null)
				return false;
		} else if (!paper_index.equals(other.paper_index))
			return false;
		if (paper_remark == null) {
			if (other.paper_remark != null)
				return false;
		} else if (!paper_remark.equals(other.paper_remark))
			return false;
		if (paper_score == null) {
			if (other.paper_score != null)
				return false;
		} else if (!paper_score.equals(other.paper_score))
			return false;
		if (paper_secrecy == null) {
			if (other.paper_secrecy != null)
				return false;
		} else if (!paper_secrecy.equals(other.paper_secrecy))
			return false;
		if (subjective_question == null) {
			if (other.subjective_question != null)
				return false;
		} else if (!subjective_question.equals(other.subjective_question))
			return false;
		return true;
	}
	
}
