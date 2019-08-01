package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.PaperChecking;
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
	public PaperChecking addResult(List<JSONObject> json);
	
}
