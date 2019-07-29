package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.Student;
@Service
public class StudentServiceImpl implements StudentService{
	@Autowired
	AdminMapper mapper;
	@Override
	public void addStudent(Student student) {
		// TODO Auto-generated method stub
		mapper.addStudent(student);
	}

	@Override
	public void deleteStudent(Student student) {
		// TODO Auto-generated method stub
		mapper.deleteStudent(student);
	}

	@Override
	public void updateStudent(Map<String, Object> student) {
		// TODO Auto-generated method stub
		mapper.updateStudent(student);
	}

	@Override
	public List<Student> queryStudent(Student student) {
		// TODO Auto-generated method stub
		List<Student> list = new ArrayList<>();
		list = mapper.queryStudent(student);
		return list;
	}

}
