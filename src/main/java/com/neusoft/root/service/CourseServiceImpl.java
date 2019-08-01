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
	public void addCourse(JSONObject json) {
		// TODO Auto-generated method stub
		Course course = new Course(json.getString("courseId"),json.getString("courseName"), json.getString("courseDesc"),json.getString("courseStartTime"),json.getString("courseEndTime"),json.getString("courseRemark"),json.getString("status"));
		mapper.addCource(course);
	}

	@Override
	public void deleteCourse(String courseId) {
		// TODO Auto-generated method stub
		Course course = new Course();
		course.setCourseId(courseId);
		mapper.deleteCourse(course);
	}
	@Override
	public void updateCourse(JSONObject json) {
		// TODO Auto-generated method stub
		Course course = new Course(json.getString("courseId"),json.getString("courseName"), json.getString("courseDesc"),json.getString("courseStartTime"),json.getString("courseEndTime"),json.getString("courseRemark"),json.getString("status"));
		Map<String, Object> map = new HashMap<>();
		map.put("courseId",course.getCourseId());
		map.put("courseName",course.getCourseName());
		map.put("courseDesc",course.getCourseType());
		map.put("courseStartTime", course.getCourseBegin());
		map.put("courseEndTime", course.getCourseEnd());
		map.put("courseRemark", course.getCourseRemark());
		map.put("status", course.getCourseStatus());
		mapper.updateCourse(map);
	}

	@Override
	public List<Course> queryCourse(String id) {
		// TODO Auto-generated method stub
		Course course = new Course();
		course.setCourseId(id);
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
