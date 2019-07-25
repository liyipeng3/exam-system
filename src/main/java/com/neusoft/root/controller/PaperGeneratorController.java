package com.neusoft.root.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.neusoft.root.domain.Paper;
import com.neusoft.root.domain.Subjects;
import com.neusoft.root.service.GetPaperCourseImpl;

@Controller
@RequestMapping("/exam")
public class PaperGeneratorController {
/*	@Autowired
	private GetPaperCourseImpl getpapersubjects;*/
	private String subject;
	@RequestMapping(value="/add_paper", method=RequestMethod.GET)
	@ResponseBody
	public String paperSettings(String paper_name, String subject, String method) {
		this.subject = subject;
		return null;
	}
	@RequestMapping(value="/get_papers", method=RequestMethod.GET)
	@ResponseBody
	public String getPapers(){
		List<Paper> papers = new ArrayList<>();
		Gson gson = new Gson();
		Paper paper1 = new Paper("1", "语文", 0.1, "choice", "fill", "subjective", 100.0, "sss", "sss");
		Paper paper2 = new Paper("2", "语文", 0.2, "choice", "fill", "subjective", 100.0, "sss", "sss");
		Paper paper3 = new Paper("3", "语文", 0.3, "choice", "fill", "subjective", 100.0, "sss", "sss");
		papers.add(paper1);
		papers.add(paper2);
		papers.add(paper3);
		return gson.toJson(papers);
	}
	@RequestMapping(value="/get_paper_subjects", method=RequestMethod.GET)
	@ResponseBody
	public String getPaperSubjects(){
		//Subjects subjects = getpapersubjects.getPaperCourse(this.subject);
		Subjects subjects = new Subjects();
		subjects.add("语文");
		subjects.add("数学");
		subjects.add("英语");
		Gson gson = new Gson();
		return gson.toJson(subjects);
	}
	@RequestMapping(value="/get_paper_items", method=RequestMethod.GET)
	@ResponseBody
	public String getItems(){
		return "success";
	} 
}
