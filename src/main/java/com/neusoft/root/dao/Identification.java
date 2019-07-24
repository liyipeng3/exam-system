package com.neusoft.root.dao;

public interface Identification {
	public boolean querystudentIdentify(String id,String password);
	public boolean queryadminIdentify(String id,String password);
	public boolean queryteacherIdentify(String id,String password);
}
