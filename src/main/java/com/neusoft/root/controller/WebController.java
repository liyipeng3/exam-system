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
	@RequestMapping("/html/exam/mgr_new")
	public String mgr_new() {
		return "/html/exam/mgr_new.html";
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
	@RequestMapping("/html/exam/exam_analysis")
	public String exam_analysis() {
		return "/html/exam/exam_analysis.html";
	}
	@RequestMapping("/html/exam/student_analysis")
	public String student_analysis() {
		return "/html/exam/student_analysis.html";
	}
	@RequestMapping("/html/exam/addtestqm")
	public String addtestqm() {
		return "/html/exam/addtestqm.html";
	}
	@RequestMapping("/html/exam/add_item")
	public String add_item() {
		return "/html/exam/add_item.html";
	}
	@RequestMapping("/html/user/user_list")
	public String user_list() {
		return "/html/user/user_list.html";
	}
	@RequestMapping("/html/user/user_reg")
	public String user_reg() {
		return "/html/user/user_reg.html";
	}
	@RequestMapping("/html/study/manager")
	public String manager() {
		return "/html/study/manager.html";
	}
	@RequestMapping("/html/study/course_mgr")
	public String course_mgr() {
		return "/html/study/course_mgr.html";
	}
	@RequestMapping("/html/study/study_record_mgr")
	public String study_record_mgr() {
		return "/html/study/study_record_mgr.html";
	}
	@RequestMapping("/html/system/sub_admin_mgr")
	public String sub_admin_mgr() {
		return "/html/system/sub_admin_mgr.html";
	}
	@RequestMapping("/html/system/admin_op_record")
	public String admin_op_record() {
		return "/html/system/admin_op_record.html";
	}
}
