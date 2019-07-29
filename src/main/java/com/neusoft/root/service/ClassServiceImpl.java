package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.Class1;

@Service
public class ClassServiceImpl implements ClassService{
	@Autowired AdminMapper mapper;
	@Override
	public void addClass(JSONObject json) {
		// TODO Auto-generated method stub
		Class1 class1 = new Class1(json.getString("classId"), json.getString("className"), json.getInteger("classSeats"));
		mapper.addClass(class1);
	}

	@Override
	public void deleteClass(JSONObject json) {
		// TODO Auto-generated method stub
		Class1 class1 = new Class1(json.getString("classId"), json.getString("className"), json.getInteger("classSeats"));
		mapper.deleteClass(class1);
	}

	@Override
	public void updateClass(JSONObject json) {
		Class1 class1 = new Class1(json.getString("classId"), json.getString("className"), json.getInteger("classSeats"));
		// TODO Auto-generated method stub
		Map<String, Object> map = new HashMap<>();
		List<String> list = new ArrayList<String>();
		list.add(class1.getClassId());
		map.put("ids",list);
		map.put("className",class1.getClassName());
		map.put("classSeats",class1.getClassSeats());
		mapper.updateClass(map);
	}

	@Override
	public List<Class1> queryClass(JSONObject json) {
		// TODO Auto-generated method stub
		Class1 class1 = new Class1(json.getString("classId"), json.getString("className"), json.getInteger("classSeats"));
		List<Class1> list = mapper.queryClass(class1);
		return list;
	}
	
}
