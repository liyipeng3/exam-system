package com.neusoft.root.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.service.CourseService;
/**
 * 
 * 
 * @author 何时谷雨
 *
 */
@Controller
@RequestMapping("/study")
public class StudyController {
	@Autowired
	private CourseService courseService;
	/**
	 * 添加课程
	 * 
	 * @param jsonObject
	 * @return
	 */
	@RequestMapping(value="/add_course", method=RequestMethod.POST)
	@ResponseBody
	public String addCourse(@RequestBody JSONObject jsonObject){
		courseService.addCourse(jsonObject);
		return "ok";
	}
}
