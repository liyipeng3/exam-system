package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Admin;

public interface AdminService {
	
	public void addAdmin(JSONObject json);
	public void deleteAdmin(JSONObject json);
	public void updateAdmin(JSONObject json);
	public List<Admin> queryAdmin(JSONObject json);
}
