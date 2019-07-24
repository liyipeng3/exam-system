package com.neusoft.root.domain;

import java.sql.Date;
public class Log {
	private String log_id;
	private String op_id;
	private Date op_date;
	private String op_type;
	private String op_msg;
	private String op_result;
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((log_id == null) ? 0 : log_id.hashCode());
		result = prime * result + ((op_date == null) ? 0 : op_date.hashCode());
		result = prime * result + ((op_id == null) ? 0 : op_id.hashCode());
		result = prime * result + ((op_msg == null) ? 0 : op_msg.hashCode());
		result = prime * result + ((op_result == null) ? 0 : op_result.hashCode());
		result = prime * result + ((op_type == null) ? 0 : op_type.hashCode());
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
		Log other = (Log) obj;
		if (log_id == null) {
			if (other.log_id != null)
				return false;
		} else if (!log_id.equals(other.log_id))
			return false;
		if (op_date == null) {
			if (other.op_date != null)
				return false;
		} else if (!op_date.equals(other.op_date))
			return false;
		if (op_id == null) {
			if (other.op_id != null)
				return false;
		} else if (!op_id.equals(other.op_id))
			return false;
		if (op_msg == null) {
			if (other.op_msg != null)
				return false;
		} else if (!op_msg.equals(other.op_msg))
			return false;
		if (op_result == null) {
			if (other.op_result != null)
				return false;
		} else if (!op_result.equals(other.op_result))
			return false;
		if (op_type == null) {
			if (other.op_type != null)
				return false;
		} else if (!op_type.equals(other.op_type))
			return false;
		return true;
	}
	public Log(String log_id, String op_id, Date op_date, String op_type, String op_msg, String op_result) {
		super();
		this.log_id = log_id;
		this.op_id = op_id;
		this.op_date = op_date;
		this.op_type = op_type;
		this.op_msg = op_msg;
		this.op_result = op_result;
	}
	public Log() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getLog_id() {
		return log_id;
	}
	public void setLog_id(String log_id) {
		this.log_id = log_id;
	}
	public String getOp_id() {
		return op_id;
	}
	public void setOp_id(String op_id) {
		this.op_id = op_id;
	}
	public Date getOp_date() {
		return op_date;
	}
	public void setOp_date(Date op_date) {
		this.op_date = op_date;
	}
	public String getOp_type() {
		return op_type;
	}
	public void setOp_type(String op_type) {
		this.op_type = op_type;
	}
	public String getOp_msg() {
		return op_msg;
	}
	public void setOp_msg(String op_msg) {
		this.op_msg = op_msg;
	}
	public String getOp_result() {
		return op_result;
	}
	public void setOp_result(String op_result) {
		this.op_result = op_result;
	}
}
