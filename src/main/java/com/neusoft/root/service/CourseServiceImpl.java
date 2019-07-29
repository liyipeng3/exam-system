package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.Course;

@Service
public class CourseServiceImpl implements CourseService{
	@Autowired 
	AdminMapper mapper;

	@Override
	public void addCource(JSONObject json) {
		// TODO Auto-generated method stub
		Course course = new Course(json.getString("courseId"),json.getString("courseName"), json.getString("courseType"));
		mapper.addCource(course);
	}

	@Override
	public void deleteCourse(JSONObject json) {
		// TODO Auto-generated method stub
		Course course = new Course(json.getString("courseId"),json.getString("courseName"), json.getString("courseType"));
		mapper.deleteCourse(course);
	}
	@Override
	public void updateCourse(JSONObject json) {
		// TODO Auto-generated method stub
		Course course = new Course(json.getString("courseId"),json.getString("courseName"), json.getString("courseType"));
		Map<String, Object> map = new HashMap<>();
		List<String> list = new ArrayList<String>();
		list.add(course.getCourseId());
		map.put("ids",list);
		map.put("courseName",course.getCourseName());
		map.put("courseType",course.getCourseType());
		mapper.updateCourse(map);
	}

	@Override
	public List<Course> queryCourse(JSONObject json) {
		// TODO Auto-generated method stub
		Course course = new Course(json.getString("courseId"),json.getString("courseName"), json.getString("courseType"));
		List<Course> list = mapper.queryCourse(course);
		return list;
	}

	@Override
	public List<String> queryAllCourse() {
		// TODO Auto-generated method stub
		List<Course> list = mapper.queryCourse(null);
		List<String> list2 = new ArrayList<>();
		for(Course course:list)
		{
			list2.add(course.getCourseType());
		}
		return list2;
	}

	
}
