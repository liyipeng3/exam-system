package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Exam;
import com.neusoft.root.domain.Teacher;
/**
 * 老师
 * @author Warriors
 *
 */
public interface ExamService 
{
	public Integer addExam(JSONObject json);
	public List<Exam> queryExam(JSONObject json);
}
