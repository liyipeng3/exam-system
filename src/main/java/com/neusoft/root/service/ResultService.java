package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.ParsedResult;
import com.neusoft.root.domain.RawResult;


public interface ResultService {
	public void addResult(JSONObject json);
	public List<RawResult> queryRawResult(JSONObject json);
	public List<ParsedResult> queryParsedResult(JSONObject json);
	
}
