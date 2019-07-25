package com.neusoft.root.controller;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neusoft.root.MD5;



@Controller
@RequestMapping("/login")
public class LoginController {
/*	@Autowired
	LoginServiceImpl loginservice;*/
	@RequestMapping(value="/checkAccount", method=RequestMethod.POST, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String checkAccount(HttpServletRequest req, String username, String password) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		System.out.println("用户名：" + username + "  密    码：" + password);
		String password_md5 = MD5.toString("123");
		System.out.println(password_md5);
		if(username.equals("admin") && password.equals(password_md5)){
			//建立会话对象，存储登录状态
			HttpSession session = req.getSession();
			session.setAttribute("flag","admin");
			return "admin";
		}
		else if(username.equals("teacher") && password.equals(password_md5)) {
			HttpSession session = req.getSession();
			session.setAttribute("flag","teacher");
			return "teacher";
		}
		else if(username.equals("student") && password.equals(password_md5)) {
			HttpSession session = req.getSession();
			session.setAttribute("flag","student");
			return "student";
		}
		else{
			return "用户名或密码错误";
		}
/*		int result = loginservice.querylogin(username, password);
		switch(result){
		case 1:
			return "admin";
			break;
		case 2:
			return "student";
			break;
		case 3:
			return "teacher";
			break;
		default:
			return "用户名或密码错误";
		}*/
	}
}
