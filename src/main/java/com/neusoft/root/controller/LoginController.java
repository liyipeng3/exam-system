package com.neusoft.root.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/login")
public class LoginController {

	@RequestMapping(value="checkAccount", method=RequestMethod.POST)
	@ResponseBody
	public String checkAccount(HttpServletRequest req, String username, String password) {
		System.out.println("用户名：" + username + "密    码：" + password);
		if(username != null && password != null){
			//建立会话对象，存储登录状态
			HttpSession session = req.getSession();
			session.setAttribute("flag",username);
			return "success";
		}
		else{
			return "error";
		}
	}
}
