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
import com.google.gson.JsonObject;
import com.neusoft.root.domain.ParsedItem;
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
		System.out.println("getpapers");
		List<RawPaper> papers = new ArrayList<>();
/*		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String datestring = df.format(time);
		RawPaper paper1 = new RawPaper(1,"test1", "1",datestring, "语文", 0.1,"choice", "fill", "subjective", "hhh", 100.0, "sss", "sss");
		RawPaper paper2 = new RawPaper(2,"test2","2", datestring, "语文", 0.2, "choice", "fill", "subjective", "hhhh", 100.0, "sss", "sss");
		RawPaper paper3 = new RawPaper(3, "test3","3", datestring, "语文", 0.3, "choice", "fill", "subjective", "hhhhh", 100.0, "sss", "sss");
		papers.add(paper1);
		papers.add(paper2);
		papers.add(paper3);*/
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
		Gson gson = new Gson();
		items = itemService.queryRawItem("");
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
	@RequestMapping(value="/update_item",method=RequestMethod.GET)
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
		System.out.println(jsonParam.toString());
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
		List<String> rawanswers = item.getItemAnswer();
		List<String> options = item.getItemOption();
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
		Gson gson = new Gson();
		String json = gson.toJson(item);
		json = json.substring(0, json.length()-1);
		json = json + ",\"option_length\":" + item.getItemOption().size() + ",\"answer_length\":" + item.getItemAnswer().size() + "}";
		return json;
		/*System.out.println(id);
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String date = df.format(time);
		ParsedItem item = new ParsedItem();
		item.setCreaterId(username);
		item.setItemDate(date);
		List<String> panswers = new ArrayList<>();
		List<String> options = new ArrayList<>();
		if(id == 1){
			item.setItemType("单选题");
			options.add("a");
			options.add("b");
			options.add("c");
			panswers.add("b");
		}
		if(id == 2){
			item.setItemType("多选题");
			options.add("a");
			options.add("b");
			options.add("c");
			panswers.add("a");
			panswers.add("b");
		}
		if(id == 3){
			item.setItemType("填空题");
			panswers.add("填空题答案1");
			panswers.add("填空题答案2");
		}
		if(id == 4){
			item.setItemType("问答题");
			panswers.add("问答题答案");
		}
		item.setItemAnswer(panswers);
		item.setItemOption(options);
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
		item.setItemCoursetype("语文");
		item.setItemId(1);
		item.setItemIndex(3.0);
		item.setItemParse("hhh");
		item.setItemPicture("无");
		item.setItemQuestion("dbiasdbis?");
		item.setItemScore(0.3);
		Gson gson = new Gson();
		String json = gson.toJson(item);
		json = json.substring(0, json.length()-1);
		json = json + ",\"option_length\":" + item.getItemOption().size() + ",\"answer_length\":" + item.getItemAnswer().size() + "}";
		return json;*/
	}
}
