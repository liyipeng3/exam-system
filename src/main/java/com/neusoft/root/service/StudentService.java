package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Student;
/**
 * 学生
 * @author Warriors
 *
 */
public interface StudentService {
	/**
	 * 增加学生
	 * @param json student串
	 */
	public void addStudent(JSONObject json);
	/**
	 * 删除学生
	 * @param json student串
	 */
	public void deleteStudent(JSONObject json);
	/**
	 * 更新学生
	 * @param json student串
	 */
	public void updateStudent(JSONObject json);
	/**
	 * 查询学生
	 * @param json student串
	 * @return student的list
	 */
	public List<Student> queryStudent(JSONObject json);
}
