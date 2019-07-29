package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.ParsedItem;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.RawItem;

public interface RawItemService {
	public List<RawItem> getRawItem(String subjects);
	public void addRawItem(JSONObject json);
	public void deleteRawItem(RawItem rawItem);
	public void updateRawItem(RawItem rawItem);
	public List<ParsedItem> queryRawItem(RawItem rawItem);
}
