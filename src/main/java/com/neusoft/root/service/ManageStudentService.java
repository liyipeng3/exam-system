package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Managestudent;

public interface ManageStudentService {

	public void addManagestudent(JSONObject json);
	public void deleteManagestudent(JSONObject json);
	public void updateManagestudent(JSONObject json);
	public List<Managestudent> queryManagestudent(JSONObject json);
}
