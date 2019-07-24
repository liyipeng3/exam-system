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
	@RequestMapping("/student")
	public String student() {
		return "/student.html";
	}
	@RequestMapping("/saved_source")
	public String saved_source() {
		return "/saved_source.html";
	}
	@RequestMapping("/exam_mgr_new")
	public String exam_mgr_new() {
		return "/exam_mgr_new.html";
	}
}
