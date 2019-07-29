package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.Managestudent;

@Service
public class ManageStudentServiceImpl implements ManageStudentService{

	@Autowired
	AdminMapper mapper;

	@Override
	public void addManagestudent(JSONObject json) {
		// TODO Auto-generated method stub
		Managestudent managestudent = new Managestudent(json.getString("classId"), json.getString("studentId"), json.getString("courseId"), json.getString("examName"), json.getString("examBegindate"), json.getString("examEnddate"));
		mapper.addManagestudent(managestudent);
	}

	@Override
	public void deleteManagestudent(JSONObject json) {
		// TODO Auto-generated method stub
		Managestudent managestudent = new Managestudent(json.getString("classId"), json.getString("studentId"), json.getString("courseId"), json.getString("examName"), json.getString("examBegindate"), json.getString("examEnddate"));	
		mapper.deleteManagestudent(managestudent);
	}

	@Override
	public void updateManagestudent(JSONObject json) {
		/*// TODO Auto-generated method stub
		Managestudent managestudent = new Managestudent(json.getString("classId"), json.getString("studentId"), json.getString("courseId"), json.getString("examName"), json.getString("examBegindate"), json.getString("examEnddate"));
		Map<String, Object> map = new HashMap<>();
		List<String> list = new ArrayList<String>();
		list.add();
		map.put("ids",list);
		map.put("className",class1.getClassName());
		map.put("classSeats",class1.getClassSeats());
		mapper.updateClass(map);*/
	}

	@Override
	public List<Managestudent> queryManagestudent(JSONObject json) {
		// TODO Auto-generated method stub
		//Managestudent managestudent = new Managestudent(json.getString("classId"), json.getString("studentId"), json.getString("courseId"), json.getString("examName"), json.getString("examBegindate"), json.getString("examEnddate"));
		return null;
	}

	
}
