package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Check;

public interface CheckService {
	public void addCheck(JSONObject json);
	public void deleteCheck(JSONObject json);
	public void updateCheck(JSONObject json);
	public List<Check> queryCheck(JSONObject json);
}
