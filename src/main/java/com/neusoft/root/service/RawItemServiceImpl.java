package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.RawItem;

@Service
public class RawItemServiceImpl implements RawItemService{

	@Autowired
	TeacherMapper mapper;

	@Override
	public List<RawItem> getRawItem(String subjects) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addRawItem(JSONObject json) {
		// TODO Auto-generated method stub
		
	}
	

	
	
}
