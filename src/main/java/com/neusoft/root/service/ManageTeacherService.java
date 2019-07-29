package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Manageteacher;

public interface ManageTeacherService {
	public void addManageteacher(JSONObject json);
	public void deleteManageteacher(JSONObject json);
	public void updateManageteacher(JSONObject json);
	public List<Manageteacher> queryManageteacher(JSONObject json);
}
