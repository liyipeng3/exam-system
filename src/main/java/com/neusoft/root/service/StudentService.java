package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Student;

public interface StudentService {
	public void addStudent(JSONObject json);
	public void deleteStudent(JSONObject json);
	public void updateStudent(JSONObject json);
	public List<Student> queryStudent(JSONObject json);
}
