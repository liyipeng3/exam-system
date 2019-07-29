package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.Teacher;

@Service
public class TeacherServiceImpl implements TeacherService{
	@Autowired
	AdminMapper mapper;

	@Override
	public void addTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		mapper.addTeacher(teacher);
	}

	@Override
	public void deleteTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		mapper.deleteTeacher(teacher);
	}

	@Override
	public void updateTeacher(Map<String, Object> teacher) {
		// TODO Auto-generated method stub
		mapper.updateTeacher(teacher);
	}

	@Override
	public List<Teacher> queryTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		List<Teacher> list = new ArrayList<>();
		list = mapper.queryTeacher(teacher);
		return list;
	}
	
}
