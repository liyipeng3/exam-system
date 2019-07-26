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
	@RequestMapping("/teacher")
	public String teacher() {
		return "/teacher.html";
	}
	@RequestMapping("/html/exam/exam_mgr_new")
	public String exam_mgr_new() {
		return "/html/exam/exam_mgr_new.html";
	}
	@RequestMapping("/html/exam/exam_add")
	public String exam_add() {
		return "/html/exam/exam_add.html";
	}
	@RequestMapping("/html/exam/paper_add_new")
	public String paper_add_new() {
		return "/html/exam/paper_add_new.html";
	}
	@RequestMapping("/html/exam/paper_manual_add")
	public String paper_manual_add() {
		return "/html/exam/paper_manual_add.html";
	}
	@RequestMapping("/html/exam/paper_select")
	public String paper_select() {
		return "/html/exam/paper_select.html";
	}
	@RequestMapping("/html/exam/test_questions")
	public String test_question() {
		return "/html/exam/test_questions.html";
	}
	@RequestMapping("/html/exam/paper_mgr_new")
	public String paper_mgr_new() {
		return "/html/exam/paper_mgr_new.html";
	}
	@RequestMapping("/html/system/admin_op_record")
	public String admin_op_record() {
		return "/html/exam/admin_op_record.html";
	}
}
