package com.neusoft.root.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.Manageteacher;
@Service
public class ManageTeacherServiceImpl implements ManageTeacherService{
	@Autowired
	AdminMapper mapper;

	@Override
	public void addManageteacher(JSONObject json) {
		// TODO Auto-generated method stub
		Manageteacher manageteacher = new Manageteacher(json.getString("classId"), json.getString("teacherId"), json.getString("courseId"), json.getString("examName"), json.getString("examBegindate"), json.getString("examEnddate"));
		mapper.addManageteacher(manageteacher);
	}

	@Override
	public void deleteManageteacher(JSONObject json) {
		// TODO Auto-generated method stub
		Manageteacher manageteacher = new Manageteacher(json.getString("classId"), json.getString("teacherId"), json.getString("courseId"), json.getString("examName"), json.getString("examBegindate"), json.getString("examEnddate"));
		mapper.deleteManageteacher(manageteacher);
	}

	@Override
	public void updateManageteacher(JSONObject json) {
		// TODO Auto-generated method stub
		Manageteacher manageteacher = new Manageteacher(json.getString("classId"), json.getString("teacherId"), json.getString("courseId"), json.getString("examName"), json.getString("examBegindate"), json.getString("examEnddate"));
		mapper.updateManageteacher(manageteacher);
	}

	@Override
	public List<Manageteacher> queryManageteacher(JSONObject json) {
		// TODO Auto-generated method stub
		Manageteacher manageteacher = new Manageteacher(json.getString("classId"), json.getString("teacherId"), json.getString("courseId"), json.getString("examName"), json.getString("examBegindate"), json.getString("examEnddate"));
		List<Manageteacher> list = mapper.queryManageteacher(manageteacher);
		return list;
	}
	

}
