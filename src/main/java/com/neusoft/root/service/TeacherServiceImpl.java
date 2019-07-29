package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.HashMap;
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
		Teacher teacher = new Teacher(json.getString("teacherId"), json.getString("teacherName"), json.getString("teacherPassword"), json.getString("teacherAcademy"), json.getString("teacherMajor"), json.getString("teacherSchool"));
		mapper.addTeacher(teacher);
	}

	@Override
	public void deleteTeacher(JSONObject json) {
		// TODO Auto-generated method stub
		Teacher teacher = new Teacher(json.getString("teacherId"), json.getString("teacherName"), json.getString("teacherPassword"), json.getString("teacherAcademy"), json.getString("teacherMajor"), json.getString("teacherSchool"));
		mapper.deleteTeacher(teacher);
	}

	@Override
	public void updateTeacher(JSONObject json) {
		// TODO Auto-generated method stub
		Teacher teacher = new Teacher(json.getString("teacherId"), json.getString("teacherName"), json.getString("teacherPassword"), json.getString("teacherAcademy"), json.getString("teacherMajor"), json.getString("teacherSchool"));
		Map<String, Object> map = new HashMap<>();
		List<String> list = new ArrayList<String>();
		list.add(teacher.getTeacherId());
		map.put("ids",list);
		map.put("teacherName",teacher.getTeacherName());
		map.put("teacherPassword",teacher.getTeacherPassword());
		map.put("teacherAcademy",teacher.getTeacherName());
		map.put("teacherMajor",teacher.getTeacherMajor());
		map.put("teacherSchool",teacher.getTeacherSchool());
		mapper.updateTeacher(map);
	}

	@Override
	public List<Teacher> queryTeacher(JSONObject json) {
		// TODO Auto-generated method stub
		Teacher teacher = new Teacher(json.getString("teacherId"), json.getString("teacherName"), json.getString("teacherPassword"), json.getString("teacherAcademy"), json.getString("teacherMajor"), json.getString("teacherSchool"));
		List<Teacher> list = mapper.queryTeacher(teacher);
		return list;
	}

	
	
}
