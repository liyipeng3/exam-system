package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Course;

public interface CourseService {
	public void addCource(JSONObject json);
	public void deleteCourse(JSONObject json);
	public void updateCourse(JSONObject json);
	public List<Course> queryCourse(JSONObject json);
	public List<String> queryCourseAll();
}
