package com.neusoft.root.controller;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neusoft.root.service.LoginService;
/**
 * 登录控制器，控制登录登出
 * 
 * @author 何时谷雨
 *
 */
@Controller
@RequestMapping("/login")
public class LoginController {
	@Autowired
	LoginService loginservice;
	/**
	 * 登录
	 * 
	 * @param request
	 * @param username 用户名
	 * @param password 密码
	 * @return
	 * @throws NoSuchAlgorithmException
	 * @throws UnsupportedEncodingException
	 */
	@RequestMapping(value="/checkAccount", method=RequestMethod.POST, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String checkAccount(HttpServletRequest request, String username, String password) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		int result = loginservice.Login(username, password);
		HttpSession session = request.getSession();
		//设置session内容，权限设置
		switch(result){
		case 1:
			session.setAttribute("username",username);
			session.setAttribute("flag", 3);
			return "admin";
		case 2:
			session.setAttribute("username",username);
			session.setAttribute("flag", 1);
			return "student";
		case 3:
			session.setAttribute("username",username);
			session.setAttribute("flag", 2);
			return "teacher";
		default:
			return "用户名或密码错误";
		}
	}
	/**
	 * 登出
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/logout",method=RequestMethod.GET)
	public String logout(HttpServletRequest request){
		HttpSession session = request.getSession();
		session.invalidate();//清除session
		return "redirect:/login";
	}
}
