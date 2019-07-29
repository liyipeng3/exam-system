package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Teacher;

public interface TeacherService {
	public void addTeacher(JSONObject json);
	public void deleteTeacher(JSONObject json);
	public void updateTeacher(JSONObject json);
	public List<Teacher> queryTeacher(JSONObject json);
}
