package com.neusoft.root.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.neusoft.root.domain.MyLog;

@Controller
@RequestMapping("/system")
public class SystemController {
	@RequestMapping(value="/get_logs",method=RequestMethod.GET)
	@ResponseBody
	public String getLog(HttpServletRequest request){
		List<MyLog> logList = new ArrayList<>();
		HttpSession session = request.getSession();
		String username = (String) session.getAttribute("username");
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String datestring = df.format(time);
		MyLog myLog1 = new MyLog(1, "opId", "opDate", "opType", "opMsg", "opPage");
		MyLog myLog2 = new MyLog(2, "操作者Id", "操作时间", "操作类型", "操作内容", "操作页面");
		MyLog myLog3 = new MyLog(3, username, datestring, "添加试卷", "java期末", "/exam/paper_mgr_new");
		logList.add(myLog1);
		logList.add(myLog2);
		logList.add(myLog3);
		Gson gson = new Gson();
		return gson.toJson(logList);
	}
}
