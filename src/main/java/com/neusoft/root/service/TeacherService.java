package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Teacher;
/**
 * 老师
 * @author Warriors
 *
 */
public interface TeacherService {
	/**
	 *增加老师
	 * @param json teacher串
	 */
	public void addTeacher(JSONObject json);
	/**
	 * 删除老师
	 * @param json teacher串
	 */
	public void deleteTeacher(JSONObject json);
	/**
	 * 更新老师
	 * @param json teacher 串
	 */
	public void updateTeacher(JSONObject json);
	/**
	 * 查询老师
	 * @param json teacher串
	 * @return teacher的list
	 */
	public List<Teacher> queryTeacher(JSONObject json);
	
	
}
