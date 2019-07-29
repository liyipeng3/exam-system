package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.MyLog;

public interface MyLogService {
	
	public void addMyLog(JSONObject json);
	public void deleteMyLog(JSONObject json);
	public void updateMyLog(JSONObject json);
	public List<MyLog> queryMyLog(JSONObject json);
	
}
