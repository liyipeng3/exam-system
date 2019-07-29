package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.HashMap;
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
		Student student = new Student(json.getString("studentId"), json.getString("studentName"), json.getString("studentPassword"), json.getString("studentAcademy"), json.getString("studentMajor"), json.getString("studentSchool"));
		mapper.addStudent(student);
	}

	@Override
	public void deleteStudent(JSONObject json) {
		// TODO Auto-generated method stub
		Student student = new Student(json.getString("studentId"), json.getString("studentName"), json.getString("studentPassword"), json.getString("studentAcademy"), json.getString("studentMajor"), json.getString("studentSchool"));
		mapper.deleteStudent(student);
	}

	@Override
	public void updateStudent(JSONObject json) {
		// TODO Auto-generated method stub
		Student student = new Student(json.getString("studentId"), json.getString("studentName"), json.getString("studentPassword"), json.getString("studentAcademy"), json.getString("studentMajor"), json.getString("studentSchool"));
		Map<String, Object> map = new HashMap<>();
		List<String> list = new ArrayList<String>();
		list.add(student.getStudentId());
		map.put("ids",list);
		map.put("studentName",student.getStudentName());
		map.put("studentPassword",student.getStudentPassword());
		map.put("studentAcademy",student.getStudentAcademy());
		map.put("studentMajor",student.getStudentMajor());
		map.put("studentSchool",student.getStudentSchool());
		mapper.updateStudent(map);;
	}

	@Override
	public List<Student> queryStudent(JSONObject json) {
		// TODO Auto-generated method stub
		Student student = new Student(json.getString("studentId"), json.getString("studentName"), json.getString("studentPassword"), json.getString("studentAcademy"), json.getString("studentMajor"), json.getString("studentSchool"));
		List<Student> list = mapper.queryStudent(student);
		return list;
	}
	

}
