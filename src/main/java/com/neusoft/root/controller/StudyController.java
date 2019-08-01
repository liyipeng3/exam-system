package com.neusoft.root.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
/**
 * 
 * 
 * @author 何时谷雨
 *
 */
@Controller
@RequestMapping("/study")
public class StudyController {
	@RequestMapping(value="/add_course",method=RequestMethod.POST)
	@ResponseBody
	public String addCourse(@RequestBody JSONObject jsonObject){
		System.out.println(jsonObject.toJSONString());
		 return "ok";
	 }


}
