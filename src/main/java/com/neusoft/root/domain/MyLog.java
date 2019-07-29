package com.neusoft.root.domain;

//日志表
public class MyLog 
{
	private Integer logId;  //日志id
	private String opId; //操作者ID
	private String opDate; //操作时间
	private String opType; //操作类型
	private String opMsg; // 操作具体内容
	private String opPage; // 操作内容

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((logId == null) ? 0 : logId.hashCode());
		result = prime * result + ((opDate == null) ? 0 : opDate.hashCode());
		result = prime * result + ((opId == null) ? 0 : opId.hashCode());
		result = prime * result + ((opMsg == null) ? 0 : opMsg.hashCode());
		result = prime * result + ((opPage == null) ? 0 : opPage.hashCode());
		result = prime * result + ((opType == null) ? 0 : opType.hashCode());
		return result;
	}
	
	@Override
	public String toString() {
		return "MyLog [logId=" + logId + ", opId=" + opId + ", opDate=" + opDate + ", opType=" + opType + ", opMsg="
				+ opMsg + ", opPage=" + opPage + "]";
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MyLog other = (MyLog) obj;
		if (logId == null) {
			if (other.logId != null)
				return false;
		} else if (!logId.equals(other.logId))
			return false;
		if (opDate == null) {
			if (other.opDate != null)
				return false;
		} else if (!opDate.equals(other.opDate))
			return false;
		if (opId == null) {
			if (other.opId != null)
				return false;
		} else if (!opId.equals(other.opId))
			return false;
		if (opMsg == null) {
			if (other.opMsg != null)
				return false;
		} else if (!opMsg.equals(other.opMsg))
			return false;
		if (opPage == null) {
			if (other.opPage != null)
				return false;
		} else if (!opPage.equals(other.opPage))
			return false;
		if (opType == null) {
			if (other.opType != null)
				return false;
		} else if (!opType.equals(other.opType))
			return false;
		return true;
	}
	public MyLog() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MyLog(Integer logId, String opId, String opDate, String opType, String opMsg, String opPage) {
		super();
		this.logId = logId;
		this.opId = opId;
		this.opDate = opDate;
		this.opType = opType;
		this.opMsg = opMsg;
		this.opPage = opPage;
	}
	public Integer getLogId() {
		return logId;
	}
	public void setLogId(Integer logId) {
		this.logId = logId;
	}
	public String getOpId() {
		return opId;
	}
	public void setOpId(String opId) {
		this.opId = opId;
	}
	public String getOpDate() {
		return opDate;
	}
	public void setOpDate(String opDate) {
		this.opDate = opDate;
	}
	public String getOpType() {
		return opType;
	}
	public void setOpType(String opType) {
		this.opType = opType;
	}
	public String getOpMsg() {
		return opMsg;
	}
	public void setOpMsg(String opMsg) {
		this.opMsg = opMsg;
	}
	public String getOpPage() {
		return opPage;
	}
	public void setOpPage(String opPage) {
		this.opPage = opPage;
	}
	
	
}
