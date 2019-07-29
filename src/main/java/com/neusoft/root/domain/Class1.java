package com.neusoft.root.domain;

//教室表
public class Class1 {
	private String classId; //教室ID
	private String className; //班级名称
	private int classSeats; //座位数目
	public Class1(String classId, String className, int classSeats) {
		super();
		this.classId = classId;
		this.className = className;
		this.classSeats = classSeats;
	}
	
	public String getClassId() {
		return classId;
	}


	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public int getClassSeats() {
		return classSeats;
	}

	public void setClassSeats(int classSeats) {
		this.classSeats = classSeats;
	}

	@Override
	public String toString() {
		return "Class1 [classId=" + classId + ", className=" + className + ", classSeats=" + classSeats + "]";
	}

	public void setClassId(String classId) {
		this.classId = classId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((classId == null) ? 0 : classId.hashCode());
		result = prime * result + ((className == null) ? 0 : className.hashCode());
		result = prime * result + classSeats;
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
		Class1 other = (Class1) obj;
		if (classId == null) {
			if (other.classId != null)
				return false;
		} else if (!classId.equals(other.classId))
			return false;
		if (className == null) {
			if (other.className != null)
				return false;
		} else if (!className.equals(other.className))
			return false;
		if (classSeats != other.classSeats)
			return false;
		return true;
	}
	
	
}
