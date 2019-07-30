package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.MyLog;
/**
 * log
 * @author Warriors
 *
 */
public interface MyLogService {
	/**
	 * 增加log
	 * @param mylog
	 */
	public void addMyLog(MyLog myLog);
	/**
	 * 删除log
	 * @param json
	 */
	public void deleteMyLog(JSONObject json);
	/**
	 * 更新log
	 * @param json
	 */
	public void updateMyLog(JSONObject json);
	/**
	 * 查询log
	 * @param json
	 * @return 查询结果list
	 */
	public List<MyLog> queryMyLog(JSONObject json);
	
}
