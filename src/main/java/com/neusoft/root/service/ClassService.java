package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Class1;
/**
 * 教室
 * @author Warriors
 *
 */
public interface ClassService {
	/**
	 * 增加教室
	 * @param json class串
	 */
	public void addClass(JSONObject json);
	/**
	 * 删除教室
	 * @param json class串
	 */
	public void deleteClass(JSONObject json);
	/**
	 * 更新教室
	 * @param json class 串
	 */
	public void updateClass(JSONObject json);
	/**
	 * 查询教室
	 * @param json class 串
	 * @return class集合list
	 */
	public List<Class1> queryClass(JSONObject json);
}
