package com.neusoft.root.domain;

//消息表
public class Message 
{
	private Integer msgId;  //消息ID
	private String msgDate; //发送消息日期
	private String senderId; //发送者ID
	private String targetId; //接收者ID
	private String msgType; //消息类型
	private String msgContext; //消息内容 
	private String msgRole; //消息角色 发送者，接收者
	
	public Message() {
		super();
	}
	
	public Message(Integer msgId, String msgDate, String senderId, String targetId, String msgType, String msgContext,
			String msgRole) {
		super();
		this.msgId = msgId;
		this.msgDate = msgDate;
		this.senderId = senderId;
		this.targetId = targetId;
		this.msgType = msgType;
		this.msgContext = msgContext;
		this.msgRole = msgRole;
	}
	public Integer getMsgId() {
		return msgId;
	}
	public void setMsgId(Integer msgId) {
		this.msgId = msgId;
	}
	public String getMsgDate() {
		return msgDate;
	}
	public void setMsgDate(String msgDate) {
		this.msgDate = msgDate;
	}
	public String getSenderId() {
		return senderId;
	}
	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}
	public String getTargetId() {
		return targetId;
	}
	public void setTargetId(String targetId) {
		this.targetId = targetId;
	}
	public String getMsgType() {
		return msgType;
	}
	public void setMsgType(String msgType) {
		this.msgType = msgType;
	}
	public String getMsgContext() {
		return msgContext;
	}
	public void setMsgContext(String msgContext) {
		this.msgContext = msgContext;
	}
	public String getMsgRole() {
		return msgRole;
	}
	public void setMsgRole(String msgRole) {
		this.msgRole = msgRole;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((msgContext == null) ? 0 : msgContext.hashCode());
		result = prime * result + ((msgDate == null) ? 0 : msgDate.hashCode());
		result = prime * result + ((msgId == null) ? 0 : msgId.hashCode());
		result = prime * result + ((msgRole == null) ? 0 : msgRole.hashCode());
		result = prime * result + ((msgType == null) ? 0 : msgType.hashCode());
		result = prime * result + ((senderId == null) ? 0 : senderId.hashCode());
		result = prime * result + ((targetId == null) ? 0 : targetId.hashCode());
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
		Message other = (Message) obj;
		if (msgContext == null) {
			if (other.msgContext != null)
				return false;
		} else if (!msgContext.equals(other.msgContext))
			return false;
		if (msgDate == null) {
			if (other.msgDate != null)
				return false;
		} else if (!msgDate.equals(other.msgDate))
			return false;
		if (msgId == null) {
			if (other.msgId != null)
				return false;
		} else if (!msgId.equals(other.msgId))

			return false;
		if (msgRole == null) {
			if (other.msgRole != null)
				return false;
		} else if (!msgRole.equals(other.msgRole))

			return false;
		if (msgRole == null) {
			if (other.msgRole != null)
				return false;
		} else if (!msgRole.equals(other.msgRole))
			return false;
		if (msgType == null) {
			if (other.msgType != null)
				return false;
		} else if (!msgType.equals(other.msgType))
			return false;
		if (senderId == null) {
			if (other.senderId != null)
				return false;
		} else if (!senderId.equals(other.senderId))
			return false;
		if (targetId == null) {
			if (other.targetId != null)
				return false;
		} else if (!targetId.equals(other.targetId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Message [msgId=" + msgId + ", msgDate=" + msgDate + ", senderId=" + senderId + ", targetId=" + targetId
				+ ", msgType=" + msgType + ", msgContext=" + msgContext + ", msgRole=" + msgRole + "]";
	}
}
