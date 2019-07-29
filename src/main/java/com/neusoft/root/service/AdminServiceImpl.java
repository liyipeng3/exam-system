package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.javassist.compiler.ast.NewExpr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.Admin;
@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	AdminMapper mapper;
	@Override
	public void addAdmin(JSONObject json) {
		// TODO Auto-generated method stub
		Admin admin = new Admin(json.getString("adminId"),json.getString("adminName"), json.getString("adminPassword"));
		mapper.addAdmin(admin);
	}

	@Override
	public void deleteAdmin(JSONObject json) {
		// TODO Auto-generated method stub
		Admin admin = new Admin(json.getString("adminId"),json.getString("adminName"), json.getString("adminPassword"));
		mapper.deleteAdmin(admin);
	}

	@Override
	public void updateAdmin(JSONObject json) {
		// TODO Auto-generated method stub
		Admin admin = new Admin(json.getString("adminId"),json.getString("adminName"), json.getString("adminPassword"));
		Map<String, Object> map = new HashMap<>();
		List<String> ids = new ArrayList<String>();
		ids.add(admin.getAdminId());
		map.put("ids",ids);
		map.put("adminName",admin.getAdminName());
		map.put("adminPassword", admin.getAdminPassword());
		mapper.updateAdmin(map);
	}

	@Override
	public List<Admin> queryAdmin(JSONObject json) {
		// TODO Auto-generated method stub
		Admin admin = new Admin(json.getString("adminId"),json.getString("adminName"), json.getString("adminPassword"));
		List<Admin> list = mapper.queryAdmin(admin);
		return list;
	}

}
