package com.neusoft.root.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.service.MyLogServiceImpl;
/**
 * 系统管理控制器
 * 
 * @author 何时谷雨
 *
 */
@Controller
@RequestMapping("/system")
public class SystemController {
	@Autowired
	MyLogServiceImpl myLogService;
	@RequestMapping(value="/get_logs",method=RequestMethod.GET)
	@ResponseBody
	public String getLog(HttpServletRequest request){
		List<MyLog> logList = new ArrayList<>();
		logList = myLogService.queryMyLog(null);
		Gson gson = new Gson();
		return gson.toJson(logList);
	}
}
