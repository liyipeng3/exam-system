package com.neusoft.root.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.google.gson.Gson;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Subjects;
import com.neusoft.root.service.CourseServiceImpl;
import com.neusoft.root.service.PaperServiceImpl;
import com.neusoft.root.service.RawItemServiceImpl;

/**
 * 
 * 
 * @author 何时谷雨
 *
 */
@Controller
@RequestMapping("/exam")
public class ExamController {
	@Autowired
	private PaperServiceImpl paperService;
	@Autowired
	private CourseServiceImpl courseService;
	@Autowired
	private RawItemServiceImpl rawItemService;
	private String subject;
	/**
	 * 
	 * 
	 * @param paper_name
	 * @param subject
	 * @param method
	 * @return
	 */
	@RequestMapping(value="/add_paper", method=RequestMethod.GET)
	@ResponseBody
	public String paperSettings(String paper_name, String subject, String method) {
		this.subject = subject;
		return null;
	}
	/**
	 * 获得所有试卷
	 * 
	 * @return
	 */
	@RequestMapping(value="/get_papers", method=RequestMethod.GET)
	@ResponseBody
	public String getPapers(){
		System.out.println("getpapers");
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
		//papers = paperService.queryRawPaper(null);
		Gson gson = new Gson();
		return gson.toJson(papers);
		//return gson.toJson(paperService.queryRawPaper(null));
	}
	/**
	 * 获得试卷的所有科目
	 * 
	 * @return
	 */
	@RequestMapping(value="/get_paper_subjects", method=RequestMethod.GET)
	@ResponseBody
	public String getPaperSubjects(){
		Subjects subjects = new Subjects();
		subjects.setSubjects(paperService.queryPaperCourse());
		Gson gson = new Gson();
		return gson.toJson(subjects);
	}
	/**
	 * 获得所有科目
	 * 
	 * @return
	 */
	@RequestMapping(value="/get_subjects", method=RequestMethod.GET)
	@ResponseBody
	public String getSubjects(){
		Subjects subjects = new Subjects();
		subjects.setSubjects(courseService.queryAllCourse());
		Gson gson = new Gson();
		return gson.toJson(subjects);
	}
	/**
	 * 获取所有试题
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/get_items", method=RequestMethod.GET)
	@ResponseBody
	public String getItems(HttpServletRequest request){
		List<RawItem> items = new ArrayList<>();
		Gson gson = new Gson();
		items = rawItemService.queryRawItem(null);
		return gson.toJson(items);
	}
	/**
	 * 获取科目对应的题
	 * 
	 * @return
	 */
	@RequestMapping(value="get_subject_items")
	@ResponseBody
	public String getSubjectItems(HttpServletRequest request){
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String datestring = df.format(time);
		List<RawItem> items = new ArrayList<>();
		RawItem item1 = new RawItem(1, "10011",datestring,"itemCourseType", "itemType", 0.1, "itemQuestion", "itemOption", "itemAnswer", "itemPicture", 0.1,"");
		RawItem item2 = new RawItem(2, "1008",datestring,"科目", "题型", 0.2, "题干", "选项", "答案", "配图路径", 0.2,"");
		RawItem item3 = new RawItem(3, "1008611",datestring, "马克思主义原理", "送分题", 99.9, "老大帅不帅", "是/是", "是", "> A <", 99.9,"");
		RawItem item4 = new RawItem(4, username, datestring, "语文", "单选题", 0.6,"老大帅不帅" , "是/是", "是",  "> A <", 99.9,"");
		items.add(item1);
		items.add(item2);
		items.add(item3);
		items.add(item4);
		Gson gson = new Gson();
		return gson.toJson(items);
		//return gson.toJson(rawItemService.getRawItem(this.subject));
	}
	/**
	 * 添加试题
	 * 
	 * @param jsonParam
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/add_item",method=RequestMethod.POST)
	@ResponseBody
	public String addItem(@RequestBody JSONObject jsonParam, HttpServletRequest request){
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String date = df.format(time);
		jsonParam.put("createrId", username);
		jsonParam.put("itemDate", date);
		System.out.println(jsonParam.toString());
		rawItemService.addRawItem(jsonParam);
		return "ok";
	}
	/**
	 * 删除试题
	 * 
	 * @param id
	 * @param request
	 * @return
	 */
	@RequestMapping(value="delete_item",method=RequestMethod.GET)
	@ResponseBody
	public String deleteItem(String id, HttpServletRequest request){
		if(id != null){
			id = id.substring(7);
			int i = Integer.valueOf(id);
			System.out.println(id);
			rawItemService.deleteRawItem(i);
			return "ok";
		}
		return "error";
	}
	/**
	 * 更新试题
	 * 
	 * @param jsonParam
	 * @param request
	 * @return
	 */
	@RequestMapping(value="update_item",method=RequestMethod.GET)
	@ResponseBody
	public String updateItem(@RequestBody JSONObject jsonParam, HttpServletRequest request){
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String date = df.format(time);
		jsonParam.put("createrId", username);
		jsonParam.put("itemDate", date);
		System.out.println(jsonParam.toString());
		rawItemService.updateRawItem(jsonParam);
		return "ok";
	}
}
