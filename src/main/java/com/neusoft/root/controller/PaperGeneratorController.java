package com.neusoft.root.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.text.SimpleDateFormat;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Subjects;

@Controller
@RequestMapping("/exam")
public class PaperGeneratorController {
/*	@Autowired
	private GetPaperServiceImpl getpapersubjects;*/
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
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String datestring = df.format(time);
		RawPaper paper1 = new RawPaper(1,"test1", "1",datestring, "语文", 0.1,"choice", "fill", "subjective", "hhh", 100.0, "sss", "sss");
		RawPaper paper2 = new RawPaper(2,"test2","2", datestring, "语文", 0.2, "choice", "fill", "subjective", "hhhh", 100.0, "sss", "sss");
		RawPaper paper3 = new RawPaper(3, "test3","3", datestring, "语文", 0.3, "choice", "fill", "subjective", "hhhhh", 100.0, "sss", "sss");
		papers.add(paper1);
		papers.add(paper2);
		papers.add(paper3);
		Gson gson = new Gson();
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
	public String getItems(HttpServletRequest request){
		HttpSession session = request.getSession();
		session.getAttribute("username");
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String datestring = df.format(time);
		List<RawItem> items = new ArrayList<>();
		RawItem item1 = new RawItem(1, "10011",datestring,"itemCourseType", "itemType", 0.1, "itemQuestion", "itemOption", "itemAnswer", "itemPicture", 0.1);
		RawItem item2 = new RawItem(2, "1008",datestring,"科目", "题型", 0.2, "题干", "选项", "答案", "配图路径", 0.2);
		RawItem item3 = new RawItem(3, "1008611",datestring, "马克思主义原理", "送分题", 99.9, "老大帅不帅", "是/是", "是", "> A <", 99.9);
		RawItem item4 = new RawItem(4, "10086", datestring, "语文", "单选题", 0.6,"老大帅不帅" , "是/是", "是",  "> A <", 99.9);
		items.add(item1);
		items.add(item2);
		items.add(item3);
		Gson gson = new Gson();
		return gson.toJson(items);
	}
}
