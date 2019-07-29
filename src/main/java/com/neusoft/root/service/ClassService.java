package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Class1;

public interface ClassService {
	public void addClass(JSONObject json);
	public void deleteClass(JSONObject json);
	public void updateClass(JSONObject json);
	public List<Class1> queryClass(JSONObject json);
}
