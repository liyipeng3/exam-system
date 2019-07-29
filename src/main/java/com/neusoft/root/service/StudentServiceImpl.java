package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.Student;
@Service
public class StudentServiceImpl implements StudentService{
	@Autowired
	AdminMapper mapper;

	@Override
	public void addStudent(JSONObject json) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteStudent(JSONObject json) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateStudent(JSONObject json) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Student> queryStudent(JSONObject json) {
		// TODO Auto-generated method stub
		return null;
	}
	

}
