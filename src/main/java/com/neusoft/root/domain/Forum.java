package com.neusoft.root.domain;

import java.sql.Date;
//帖子
public class Forum {
	private String postId;
	private String postDate;
	private String senderId;
	private String postTag;//分类标签
	private String postOutline;//题目
	private String postContext;//内容
<<<<<<< Updated upstream

	
	public Forum() {
		super();
	}
	public Forum(String postId, Date postDate, String senderId, String postTag, String postOutline,
			String postContext) {
		super();
		this.postId = postId;
		this.postDate = postDate;
		this.senderId = senderId;
		this.postTag = postTag;
		this.postOutline = postOutline;
		this.postContext = postContext;
	}
=======
>>>>>>> Stashed changes
	public String getPostId() {
		return postId;
	}
	public void setPostId(String postId) {
		this.postId = postId;
	}
	public String getPostDate() {
		return postDate;
	}
	public void setPostDate(String postDate) {
		this.postDate = postDate;
	}
	public String getSenderId() {
		return senderId;
	}
	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}
	public String getPostTag() {
		return postTag;
	}
	public void setPostTag(String postTag) {
		this.postTag = postTag;
	}
	public String getPostOutline() {
		return postOutline;
	}
	public void setPostOutline(String postOutline) {
		this.postOutline = postOutline;
	}
	public String getPostContext() {
		return postContext;
	}
	public void setPostContext(String postContext) {
		this.postContext = postContext;
	}
<<<<<<< Updated upstream

=======
	public Forum(String postId, String postDate, String senderId, String postTag, String postOutline,
			String postContext) {
		super();
		this.postId = postId;
		this.postDate = postDate;
		this.senderId = senderId;
		this.postTag = postTag;
		this.postOutline = postOutline;
		this.postContext = postContext;
	}
	public Forum() {
		super();
		// TODO Auto-generated constructor stub
	}
>>>>>>> Stashed changes
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((postContext == null) ? 0 : postContext.hashCode());
		result = prime * result + ((postDate == null) ? 0 : postDate.hashCode());
		result = prime * result + ((postId == null) ? 0 : postId.hashCode());
		result = prime * result + ((postOutline == null) ? 0 : postOutline.hashCode());
		result = prime * result + ((postTag == null) ? 0 : postTag.hashCode());
		result = prime * result + ((senderId == null) ? 0 : senderId.hashCode());
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
		Forum other = (Forum) obj;
		if (postContext == null) {
			if (other.postContext != null)
				return false;
		} else if (!postContext.equals(other.postContext))
			return false;
		if (postDate == null) {
			if (other.postDate != null)
				return false;
		} else if (!postDate.equals(other.postDate))
			return false;
		if (postId == null) {
			if (other.postId != null)
				return false;
		} else if (!postId.equals(other.postId))
			return false;
		if (postOutline == null) {
			if (other.postOutline != null)
				return false;
		} else if (!postOutline.equals(other.postOutline))
			return false;
		if (postTag == null) {
			if (other.postTag != null)
				return false;
		} else if (!postTag.equals(other.postTag))
			return false;
		if (senderId == null) {
			if (other.senderId != null)
				return false;
		} else if (!senderId.equals(other.senderId))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Forum [postId=" + postId + ", postDate=" + postDate + ", senderId=" + senderId + ", postTag=" + postTag
				+ ", postOutline=" + postOutline + ", postContext=" + postContext + "]";
	}
	
	
}
