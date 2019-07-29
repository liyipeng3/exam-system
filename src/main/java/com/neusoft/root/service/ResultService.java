package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Result;

public interface ResultService {
	public void addResult(JSONObject json);
	public List<Result> queryResult(JSONObject json);
}
