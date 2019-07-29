package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.Teacher;

@Service
public class TeacherServiceImpl implements TeacherService{
	@Autowired
	AdminMapper mapper;

	@Override
	public void addTeacher(JSONObject json) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteTeacher(JSONObject json) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateTeacher(JSONObject json) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Teacher> queryTeacher(JSONObject json) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
}
