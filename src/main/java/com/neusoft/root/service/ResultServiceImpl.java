package com.neusoft.root.service;

import static org.assertj.core.api.Assertions.filter;

import java.util.ArrayList;
import java.util.List;

import javax.security.auth.login.FailedLoginException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.dao.StudentMapper;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.Exam;
import com.neusoft.root.domain.PaperChecking;
import com.neusoft.root.domain.ParsedItem;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.ParsedResult;
import com.neusoft.root.domain.RawResult;
import com.neusoft.root.domain.Student;

@Service
public class ResultServiceImpl implements ResultService{
	@Autowired
	AdminMapper mapper;
	@Autowired 
	TeacherMapper teachermapper;
	@Autowired
	ExamService service;
	@Autowired
	MyService myService;
	@Autowired
	ItemService ItemService;
	@Autowired
	StudentMapper student;
	@Autowired
	CheckService check;
	@Override
	public PaperChecking addResult(List<JSONObject> jsonx) {
		// TODO Auto-generated method stub
		
		String single = "";
		String multi = "";
		String fill = "";
		String subjective = "";
		Integer paperId =0;
		String studentId ="";
		String teacherId = "";
		String date ="";
		boolean flag =false;
		List<Integer> list = new ArrayList<>();
	//	System.out.println(jsonx.size());
		for(int j=jsonx.size()-1;j>=0;j--)
		{
			flag=false;
			JSONObject json = jsonx.get(j);
			 Integer itemId = Integer.valueOf(json.getString("test_id"));
			for(Integer num:list)
			{
				if(num==itemId)
				{
		//			System.out.println("num"+num);
					flag=true;
			//		System.out.println("break");
					break;
				}
			}
			//System.out.println("flag"+flag);
			if(flag)
			{
				flag =false;
			//	System.out.println("@@@");
				continue;
			}
			else
			{
				list.add(itemId);
			}
		//	System.out.println("!!!");
			studentId = json.getString("username");
			Integer examId = Integer.valueOf(json.getString("exam_id"));
			date = json.getString("date");
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("examId",examId );
			List<Exam> examlist = service.queryExam(jsonObject);
			if(examlist.size()!=1)
			{
				System.out.println("examid不唯一！！！");
				System.exit(0);
			}
				Exam exam = examlist.get(0);
				paperId = exam.getPaperId();
				
				ParsedPaper paperlist = myService.queryParsedPaper(paperId);
				teacherId = paperlist.getCreaterId();
				
				 List<ParsedItem> itemlist= ItemService.queryParsedItem(itemId);
				 if(itemlist.size()!=1)
				 {
					 System.out.println("itemid不唯一！！！");
					System.exit(0);
				 }
				 else
				 {
					 String answerx = json.getString("test_ans");
					// System.out.println("answerx"+answerx);
					 String answer[] = answerx.split(",");
					 List<String> endanswer = new ArrayList<>();
					// System.out.println(answer.length);
					 for(int i=0;i<answer.length;i++)
					 {
						 for(int k=1;k<=20;k++)
						 {
							 if(answer[i].equals("key"+k))
							 {
								 List<String> itemanswer = itemlist.get(0).getItemOption();
								 endanswer.add(itemanswer.get(k-1 ));
							 }
						 }
					 }
					 String itemtype = itemlist.get(0).getItemType();
					 if(itemtype.equals("单选题"))
					 {
					//	 System.out.println(answer[0]);
						 single = single+itemId+"???"+endanswer.get(0)+"###";
					 }
					 else if(itemtype.equals("多选题"))
					 {
						 multi = multi +itemId+"???";
						 for(String ans:endanswer)
						 {
							 multi = multi+ans+"!!!";
						 }
						 multi = multi.substring(0, multi.length()-3)+"###";
					 }
					 else if(itemtype.equals("填空题"))
					 {
						 fill = fill+itemId+"???";
						String an[] = answerx.split("\\|\\|");
					//	System.out.println(answerx.length());
						for(int l=0;l<an.length;l++)
						{
							fill = fill+an[l]+"!!!";
						}
						 fill = fill.substring(0, fill.length()-3)+"###";
					 }
					 else if(itemtype.equals("问答题"))
					 {
						 subjective = subjective+itemId+"???"+answerx+"###";
					 }
					 else {
						 System.out.println("无效题目类型！！！");
							System.exit(0);
					}
				 }
				 
			
		}
		if(!single.equals(""))
		single = single.substring(0, single.length()-3);
		if(!multi.equals(""))
		multi = multi.substring(0, multi.length()-3);
		if(!fill.equals(""))
		fill = fill.substring(0, fill.length()-3);
		if(!subjective.equals(""))
		subjective = subjective.substring(0, subjective.length()-3);
		RawResult result = new RawResult(studentId, paperId, teacherId, single, multi, fill, subjective, date, "yes");
		//System.out.println(result);
		//System.out.println(list.toString());
		student.addResult(result);
		//my
		JSONObject myjson = new JSONObject();
		myjson.put("studentId", studentId);
		myjson.put("paperId",paperId);
		myjson.put("teacherId", teacherId);
		myjson.put("checkDate", date);
		result.setStudentId(null);
		
		return check.queryPaperChecking(myjson).get(0);
	}	
}