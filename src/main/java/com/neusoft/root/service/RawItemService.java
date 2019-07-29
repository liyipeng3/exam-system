package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.RawItem;

public interface RawItemService {
	public List<RawItem> getRawItem(String subjects);
	
	public void addRawItem(JSONObject json);
}
