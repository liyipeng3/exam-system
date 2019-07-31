package com.neusoft.root.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.neusoft.root.domain.ParsedItem;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Subjects;
import com.neusoft.root.service.CourseServiceImpl;
import com.neusoft.root.service.PaperServiceImpl;
import com.neusoft.root.service.ItemServiceImpl;

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
	private ItemServiceImpl itemService;
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
		List<RawPaper> papers = new ArrayList<>();
		papers = paperService.queryRawPaper();
		Gson gson = new Gson();
		return gson.toJson(papers);
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
		items = itemService.queryRawItem("");
		Gson gson = new Gson();
		return gson.toJson(items);
	}
	/**
	 * 获取科目和题型对应的题
	 * 
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	@RequestMapping(value="get_certain_items",method=RequestMethod.GET)
	@ResponseBody
	public String getCertainItems(HttpServletRequest request, String itemType, String subject) throws UnsupportedEncodingException{
		List<ParsedItem> items = new ArrayList<>();
		itemType = URLDecoder.decode(itemType, "utf-8");
		subject = URLDecoder.decode(subject, "utf-8");
		items = paperService.createPaper(subject, itemType);
		Gson gson = new Gson();
		return gson.toJson(items);
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
		if(jsonParam.getString("itemType").equals("问答题")){
			jsonParam.put("option_length", 1);
		}
		itemService.addRawItem(jsonParam);
		return "ok";
	}
	/**
	 * 删除试题
	 * 
	 * @param id
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/delete_item",method=RequestMethod.GET)
	@ResponseBody
	public String deleteItem(String id, HttpServletRequest request){
		if(id != null){
			id = id.substring(7);
			int i = Integer.valueOf(id);
			System.out.println(id);
			itemService.deleteRawItem(i);
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
	@RequestMapping(value="/update_item",method=RequestMethod.POST)
	@ResponseBody
	public String updateItem(@RequestBody JSONObject jsonParam, HttpServletRequest request){
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String date = df.format(time);
		jsonParam.put("createrId", username);
		jsonParam.put("itemDate", date);
		if(jsonParam.getString("itemType").equals("问答题")){
			jsonParam.put("option_length", 1);
		}
		itemService.updateRawItem(jsonParam);
		return "ok";
	}
	/**
	 * 按题号获取解析后题目
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/get_item_by_id",method=RequestMethod.GET)
	@ResponseBody
	public String getItemById(Integer id, HttpServletRequest request){
		ParsedItem item = itemService.queryParsedItem(id).get(0);
		if(!item.getItemType().equals("问答题") && !item.getItemType().equals("填空题")){
			List<String> answers = new ArrayList<>();
			for(int i = 0; i < item.getItemAnswer().size(); i++){
				for(int j = 0; j < item.getItemOption().size(); j++){
					if(item.getItemAnswer().get(i).equals(item.getItemOption().get(j))){
						int choice = j + 1;
						String answer = "key"+ choice + "Editor";
						answers.add(answer);
					}
				}
			}
			item.setItemAnswer(answers);
		}
		Gson gson = new Gson();
		String json = gson.toJson(item);
		json = json.substring(0, json.length()-1);
		json = json + ",\"option_length\":" + item.getItemOption().size() + ",\"answer_length\":" + item.getItemAnswer().size() + "}";
		return json;
	}
	@RequestMapping(value="/get_parsed_paper",method=RequestMethod.GET)
	@ResponseBody
	public String getParsedPaper(int id){
		ParsedPaper parsePaper = paperService.queryParsedPaper(id).get(0);
		Gson gson = new Gson();
		String json = gson.toJson(parsePaper);
		return json;
	}
	@RequestMapping(value="/get_random_paper",method=RequestMethod.GET)
	@ResponseBody
	public String getRandomPaper(HttpServletRequest request){
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		ParsedPaper parsePaper = paperService.randPaper("语文月考", "语文", username);
		Gson gson = new Gson();
		String json = gson.toJson(parsePaper);
		return json;
	}
}
