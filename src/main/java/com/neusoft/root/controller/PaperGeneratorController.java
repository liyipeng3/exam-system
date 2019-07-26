package com.neusoft.root.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import java.sql.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Subjects;

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
		List<RawPaper> papers = new ArrayList<>();
		Gson gson = new Gson();

		@SuppressWarnings("deprecation")

		RawPaper paper1 = new RawPaper(1,"test1", "1","2019-7-1", "语文", 0.1,"choice", "fill", "subjective", "hhh", 100.0, "sss", "sss");
		RawPaper paper2 = new RawPaper(2,"test2","2", "2019-7-1", "语文", 0.2, "choice", "fill", "subjective", "hhhh", 100.0, "sss", "sss");
		RawPaper paper3 = new RawPaper(3, "test3","3", "2019-7-1", "语文", 0.3, "choice", "fill", "subjective", "hhhhh", 100.0, "sss", "sss");
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
	@RequestMapping(value="/get_items", method=RequestMethod.GET)
	@ResponseBody
	public String getItems(){
		
		return "ok";
	} 
}