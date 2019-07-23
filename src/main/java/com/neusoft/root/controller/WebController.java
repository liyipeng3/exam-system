package com.neusoft.root.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
	@RequestMapping("/login")
	public String login() {
		return "/login.html";
	}
	@RequestMapping("/register")
	public String register() {
		return "/register.html";
	}
	@RequestMapping("/index")
	public String index() {
		return "/index.html";
	}
}
