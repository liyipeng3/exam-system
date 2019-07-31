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
		System.out.println(gson.toJson(items));
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
	/**
	 * 获取完整试卷
	 * 
	 * @param id 试卷id
	 * @return
	 */
	@RequestMapping(value="/get_parsed_paper",method=RequestMethod.GET)
	@ResponseBody
	public String getParsedPaper(int id){
		ParsedPaper parsePaper = paperService.queryParsedPaper(id).get(0);
		Gson gson = new Gson();
		String json = gson.toJson(parsePaper);
		return json;
	}
	/**
	 * 随机组卷
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/get_random_paper",method=RequestMethod.GET)
	@ResponseBody
	public String getRandomPaper(HttpServletRequest request, String paperName, String subject){
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		ParsedPaper parsePaper = paperService.randPaper(paperName, subject, username);
		Gson gson = new Gson();
		String json = gson.toJson(parsePaper);
		return json;
	}
	/**
	 * 提交答卷
	 * 
	 * @param jsonObject
	 * @return
	 */
	@RequestMapping(value="/add_result",method=RequestMethod.POST)
	@ResponseBody
	public String addResult(@RequestBody JSONObject jsonObject){
		
		return "ok";
	}
	/**
	 * 获得学生答卷列表
	 * 
	 * @param request
	 * @return
	 */
	@RequestMapping(value="/get_raw_result",method=RequestMethod.GET)
	@ResponseBody
	public String getRawResult(HttpServletRequest request){
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		/*Gson gson = new Gson();
		String json = gson.toJson();*/
		return "ok";
	}
	/**
	 * 获得学生答卷
	 * 
	 * @param studentId
	 * @param paperId
	 * @return
	 */
	@RequestMapping(value="/get_paper_checking",method=RequestMethod.GET)
	@ResponseBody
	public String getPaperChecking(String studentId, String paperId){
		return "ok";
	}
	/**
	 * 提交批改结果
	 * 
	 * @param jsonObject
	 * @return
	 */
	@RequestMapping(value="/add_paper_checking")
	@ResponseBody
	public String addPaperChecking(@RequestBody JSONObject jsonObject){
		return "ok";
	}
	/*{"_id":{"timestamp":1563789001,"machineIdentifier":5030166,"processIdentifier":29405,"counter":3855673,"timeSecond":1563789001,"date":1563789001000,"time":1563789001000},"status":"enable",
		"create_date":1478088009632,"classification":"514885","key3":"1",
		"answer1":"清晨","key1":"0","tab_num":"3","question":"拜访他人应选择（）,并应提前打招呼。",
		"answer3":"节假日的下午或平日的晚饭后 ","answer2":"用餐时间",
		"creater":"wupengcheng@ksxing.com","key2":"0","cop_id":"140092",
		"type":"1","difficult":"simple","label":"","labelName":"","classificatonName":"示例",
		"encrypt":"0","id":"5d3586c94cc11672dd3ad539","test_ans_right":"C","analysis":"无"}*/
	@RequestMapping(value="/load_data",method=RequestMethod.GET)
	@ResponseBody
	public String loadData(HttpServletRequest request, Integer id){
		ParsedItem item = itemService.queryParsedItem(id).get(0);
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String json = "{\"_id\":{\"timestamp\":1563789001,\"machineIdentifier\":5030166,\"processIdentifier\":29405,\"counter\":3855673,\"timeSecond\":1563789001,\"date\":1563789001000,\"time\":1563789001000},\"status\":\"enable\"";
		json += ",\"classification\":\"514885\",\"cop_id\":\"140092\",\"label\":\"\",\"classificatonName\":\"示例\",\"encrypt\":\"0\"";
		System.out.println(item);
		List<String> options = item.getItemOption();
		List<String> answers = item.getItemAnswer();
		Double index = item.getItemIndex();
		String type = item.getItemType();
		String diffcult = "";
		if(index==1.0){
			diffcult="简单";
		}
		if(index==3.0){
			diffcult="普通";
		}
		if(index==5.0){
			diffcult="困难";
		}
		json += ",\"create_date\":"+"\""+item.getItemDate()+"\"";
		json += ",\"creater\":"+"\""+item.getCreaterId()+"\"";
		json += ",\"id\":"+"\""+item.getItemId()+"\"";
		json += ",\"difficult\":"+"\""+diffcult+"\"";
		json += ",\"analysis\":"+"\""+item.getItemParse()+"\"";
		json += ",\"type\":"+"\""+item.getItemType()+"\"";
		json += ",\"question\":"+"\""+item.getItemQuestion()+"\"";
		json += ",\"tab_num\":"+"\""+options.size()+"\"";
		for(int i=0;i<options.size();i++){
			int j = i+1;
			json += ",\"answer"+j+"\":"+"\""+options.get(i)+"\"";
			json += ",\"key"+j+"\":"+"\""+j+"\"";
		}
		for(int i=0;i<answers.size();i++){
			int j = i+1;
			json += ",\"test_ans_right"+j+"\":"+"\""+answers.get(i)+"\"";
		}
		json += "}";
		return json;
	}
}
