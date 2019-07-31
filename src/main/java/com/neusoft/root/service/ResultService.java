package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.ParsedResult;
import com.neusoft.root.domain.RawResult;

/**
 * 答题结果
 * @author Warriors
 *
 */
public interface ResultService {
	/**
	 * 增加答题结果
	 * @param json result串
	 */
	public void addResult(JSONObject json);
	/**
	 * 查询结果
	 * @param json rawresult串
	 * @return rawresult的list
	 */
	public List<RawResult> queryRawResult(String teacherId);
	/**
	 * 查询结果
	 * @param json 老师
	 * @return parsedresult的list
	 */
	public List<ParsedResult> queryParsedResult(String teacherId);
	/**
	 * 更新学生答卷是否被批改
	 * @param studentId 学生ID
	 * @param paperId 试卷ID
	 * @param teacherId 老师ID
	 */
	public void update(String studentId,String paperId,String teacherId);
}
