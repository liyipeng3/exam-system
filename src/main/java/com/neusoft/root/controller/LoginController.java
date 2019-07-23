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
	@RequestMapping(value="checkAccount", method=RequestMethod.POST, produces="application/json;charset=UTF-8")
	@ResponseBody
	public String checkAccount(HttpServletRequest req, String username, String password) throws NoSuchAlgorithmException, UnsupportedEncodingException {
		System.out.println("用户名：" + username + "  密    码：" + password);
		String password_md5 = MD5.toString("123");
		if(username.equals("admin") && password.equals(password_md5)){
			//建立会话对象，存储登录状态
			HttpSession session = req.getSession();
			session.setAttribute("flag",username);
			return "ok";
		}
		else{
			return "用户名或密码错误";
		}
	}
}
