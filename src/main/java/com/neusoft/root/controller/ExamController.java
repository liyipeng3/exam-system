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
import com.neusoft.root.service.ExamServiceImpl;
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
	@Autowired
	private ExamServiceImpl examService;
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
		ParsedPaper parsePaper = paperService.queryParsedPaper(id);
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
	/**
	 * 添加试卷
	 * 
	 * @param jsonObject
	 * @return
	 */
	@RequestMapping(value="/add_paper",method=RequestMethod.POST)
	@ResponseBody
	public String addPaper(@RequestBody JSONObject jsonObject, HttpServletRequest request){
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		jsonObject.put("createrId", username);
		System.out.println(jsonObject.toJSONString());
		int id = paperService.addRawPaper(jsonObject);
		String result = "{\"paper_id\":\""+id+"\",\"status\":\"ok\"}";
		//String result = "{\"paper_id\":\""+1+"\",\"status\":\"ok\"}";
		return result;
	}
	/**
	 * 加载题目信息
	 * 
	 * @param request
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/load_data",method=RequestMethod.GET)
	@ResponseBody
	public String loadData(HttpServletRequest request, Integer id){
		ParsedItem item = itemService.queryParsedItem(id).get(0);
		String json = "{\"_id\":{\"timestamp\":1563789001,\"machineIdentifier\":5030166,\"processIdentifier\":29405,\"counter\":3855673,\"timeSecond\":1563789001,\"date\":1563789001000,\"time\":1563789001000},\"status\":\"enable\"";
		json += ",\"classification\":\"514885\",\"cop_id\":\"140092\",\"label\":\"\",\"classificatonName\":\"示例\",\"encrypt\":\"0\"";
		System.out.println(item);
		List<String> options = item.getItemOption();
		List<String> answers = item.getItemAnswer();
		Double index = item.getItemIndex();
		String type = item.getItemType();
		if(type.equals("单选题")){
			type="1";
		}
		if(type.equals("多选题")){
			type="2";
		}
		if(type.equals("填空题")){
			type="4";
		}
		if(type.equals("问答题")){
			type="5";
		}
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
		json += ",\"type\":"+"\""+type+"\"";
		json += ",\"question\":"+"\""+item.getItemQuestion()+"\"";
		if(type.equals("1")||type.equals("2")){
			for(int i=0;i<options.size();i++){
				int j = i+1;
				json += ",\"answer"+j+"\":"+"\""+options.get(i)+"\"";
				json += ",\"key"+j+"\":"+"\""+j+"\"";
			}
			String C="";
			for(int i=0;i<answers.size();i++){
				int k = 0;
				while(k<options.size()){
					if(answers.get(i).equals(options.get(k))){
						break;
					}
					k++;
				}
				int c = 65 + k;
				C += (char)c;
			}
			json += ",\"test_ans_right"+"\":"+"\""+C+"\"";
			json += ",\"tab_num\":"+"\""+options.size()+"\"";
		}
		else if(type.equals("4")){
			String answer = "";
			for(int i=0;i<answers.size();i++){
				int j = i+1;
				json += ",\"answer"+j+"\":"+"\""+answers.get(i)+"\"";
				json += ",\"key"+j+"\":"+"\""+1+"\"";
			}
			json += ",\"test_ans_right"+"\":"+"\"";
			for(int i=0;i<answers.size();i++){
				answer += ","+answers.get(i);
			}
			answer=answer.substring(1);
			json += answer;
			json += "\"";
			json += ",\"tab_num\":"+"\""+0+"\"";
		}
		else{
			json += ",\"answer"+1+"\":"+"\""+answers.get(0)+"\"";
			json += ",\"key"+1+"\":"+"\""+1+"\"";
			json += ",\"test_ans_right"+"\":"+"\""+answers.get(0)+"\"";
			json += ",\"tab_num\":"+"\""+0+"\"";
		}
		json += "}";
		return json;
	}
	/**
	 * 创建考试
	 * 
	 * @return
	 */
	@RequestMapping(value="/add_exam",method=RequestMethod.POST)
	@ResponseBody
	public String addExam(@RequestBody JSONObject jsonObject, HttpServletRequest request){
		HttpSession session = request.getSession();
		String username = session.getAttribute("username").toString();
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String date = df.format(time);
		System.out.println(jsonObject.toJSONString());
		jsonObject.put("createrId", username);
		jsonObject.put("createDate", date);
		jsonObject.put("passScore", jsonObject.getString("passMark"));
		jsonObject.put("examBegin", jsonObject.getString("examStartTime"));
		jsonObject.put("examEnd", jsonObject.getString("examEndTime"));
		jsonObject.put("examLast", jsonObject.getString("examTime"));
		jsonObject.put("examRemark", jsonObject.getString("beforeAnswerNotice"));
		int id = examService.addExam(jsonObject);
		System.out.println(id);
		String result = "{\"exam_id\":\""+id+"\",\"status\":\"ok\"}";
		return result;
	}
	@RequestMapping(value="/get_exam",method=RequestMethod.GET)
	@ResponseBody
	public String getExam(){
		Gson gson = new Gson();
		JSONObject json = new JSONObject();
		json.put("examId", "");
		return gson.toJson(examService.queryExam(json));
	}
	/**
	 * 按id获取试卷信息
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/get_paper_info",method=RequestMethod.GET)
	@ResponseBody
	public String getPaperInfo(int id){
		/*ParsedPaper paper = paperService.queryParsedPaper(id);
		System.out.println(paper);
		JsonObject json = new JsonObject();
		json.addProperty("paperName", paper.getPaperName());
		json.addProperty("paperSubject", paper.getPaperType());
		json.addProperty("score", paper.getPaperScore());
		json.addProperty("createrId", paper.getCreaterId());
		json.addProperty("createDate", paper.getCreateDate());
		json.addProperty("paperRemark", paper.getPaperRemark());
		int num = 0;
		List<List<ParsedItem>> ITEMS =  paper.getItems();
		for(int i = 0; i < ITEMS.size(); i++){
			List<ParsedItem> items = ITEMS.get(i);
			for(int j = 0; j < items.size(); j++){
				num++;
			}
		}
		json.addProperty("itemsNumber", String.valueOf(num));*/
		JsonObject json = new JsonObject();
		json.addProperty("paperName", "语文期末");
		json.addProperty("paperSubject", "语文");
		json.addProperty("score", "100");
		json.addProperty("createrId", "teacher");
		json.addProperty("createDate", "2019-11-11 11:11");
		json.addProperty("paperRemark", "请勿作弊");
		json.addProperty("itemsNumber", "20");
		return json.toString();
	}
}
