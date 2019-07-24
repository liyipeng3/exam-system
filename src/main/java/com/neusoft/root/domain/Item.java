package com.neusoft.root.domain;

public class Item {
	private String item_id;
	private String item_course_type;
	private String item_type;
	private Double item_index;
	private String item_question;
	private String item_option;
	private String item_answer;
	private String item_picture;
	private Double item_score;
	private String getItem_id() {
		return item_id;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((item_answer == null) ? 0 : item_answer.hashCode());
		result = prime * result + ((item_course_type == null) ? 0 : item_course_type.hashCode());
		result = prime * result + ((item_id == null) ? 0 : item_id.hashCode());
		result = prime * result + ((item_index == null) ? 0 : item_index.hashCode());
		result = prime * result + ((item_option == null) ? 0 : item_option.hashCode());
		result = prime * result + ((item_picture == null) ? 0 : item_picture.hashCode());
		result = prime * result + ((item_question == null) ? 0 : item_question.hashCode());
		result = prime * result + ((item_score == null) ? 0 : item_score.hashCode());
		result = prime * result + ((item_type == null) ? 0 : item_type.hashCode());
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
		if (item_answer == null) {
			if (other.item_answer != null)
				return false;
		} else if (!item_answer.equals(other.item_answer))
			return false;
		if (item_course_type == null) {
			if (other.item_course_type != null)
				return false;
		} else if (!item_course_type.equals(other.item_course_type))
			return false;
		if (item_id == null) {
			if (other.item_id != null)
				return false;
		} else if (!item_id.equals(other.item_id))
			return false;
		if (item_index == null) {
			if (other.item_index != null)
				return false;
		} else if (!item_index.equals(other.item_index))
			return false;
		if (item_option == null) {
			if (other.item_option != null)
				return false;
		} else if (!item_option.equals(other.item_option))
			return false;
		if (item_picture == null) {
			if (other.item_picture != null)
				return false;
		} else if (!item_picture.equals(other.item_picture))
			return false;
		if (item_question == null) {
			if (other.item_question != null)
				return false;
		} else if (!item_question.equals(other.item_question))
			return false;
		if (item_score == null) {
			if (other.item_score != null)
				return false;
		} else if (!item_score.equals(other.item_score))
			return false;
		if (item_type == null) {
			if (other.item_type != null)
				return false;
		} else if (!item_type.equals(other.item_type))
			return false;
		return true;
	}
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Item(String item_id, String item_course_type, String item_type, Double item_index, String item_question,
			String item_option, String item_answer, String item_picture, Double item_score) {
		super();
		this.item_id = item_id;
		this.item_course_type = item_course_type;
		this.item_type = item_type;
		this.item_index = item_index;
		this.item_question = item_question;
		this.item_option = item_option;
		this.item_answer = item_answer;
		this.item_picture = item_picture;
		this.item_score = item_score;
	}
	public void setItem_id(String item_id) {
		this.item_id = item_id;
	}
	public String getitem_course_type() {
		return item_course_type;
	}
	public void setitem_course_type(String item_course_type) {
		this.item_course_type = item_course_type;
	}
	public String getItem_type() {
		return item_type;
	}
	public void setItem_type(String item_type) {
		this.item_type = item_type;
	}
	public Double getItem_index() {
		return item_index;
	}
	public void setItem_index(Double item_index) {
		this.item_index = item_index;
	}
	public String getItem_question() {
		return item_question;
	}
	public void setItem_question(String item_question) {
		this.item_question = item_question;
	}
	public String getItem_option() {
		return item_option;
	}
	public void setItem_option(String item_option) {
		this.item_option = item_option;
	}
	public String getItem_answer() {
		return item_answer;
	}
	public void setItem_answer(String item_answer) {
		this.item_answer = item_answer;
	}
	public String getItem_picture() {
		return item_picture;
	}
	public void setItem_picture(String item_picture) {
		this.item_picture = item_picture;
	}
	public Double getItem_score() {
		return item_score;
	}
	public void setItem_score(Double item_score) {
		this.item_score = item_score;
	}
}
