package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Course;
/**
 * 课程
 * @author Warriors
 *
 */
public interface CourseService {
	/**
	 * 增加课程
	 * @param json course串
	 */
	public void addCourse(JSONObject json);
	
	/**
	 * 查询课程
	 * @param json course串
	 * @return 查询course结果list
	 */
	public List<Course> queryCourse(String id);
	/**
	 * 查询所有课程
	 * @return 所有课程名list
	 */
	public List<String> queryAllCourse();
}
