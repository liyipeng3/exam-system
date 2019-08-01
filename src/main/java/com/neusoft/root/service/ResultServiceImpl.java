package com.neusoft.root.service;

import static org.assertj.core.api.Assertions.filter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.Exam;
import com.neusoft.root.domain.ParsedItem;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.ParsedResult;
import com.neusoft.root.domain.RawResult;

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
	AdminMapper AdminMapper;
	@Override
	public void addResult(List<JSONObject> jsonx) {
		// TODO Auto-generated method stub
		
		String single = "";
		String multi = "";
		String fill = "";
		String subjective = "";
		Integer paperId =0;
		String studentId ="";
		String teacherId = "";
		String date ="";
		for(int j=0;j<jsonx.size();j++)
		{
			JSONObject json = jsonx.get(j);
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
			else
			{
				Exam exam = examlist.get(0);
				paperId = exam.getPaperId();
				ParsedPaper paperlist = myService.queryParsedPaper(paperId);
				teacherId = paperlist.getCreaterId();
				 Integer itemId = Integer.valueOf(json.getString("test_id"));
				 List<ParsedItem> itemlist= ItemService.queryParsedItem(itemId);
				 if(itemlist.size()!=1)
				 {
					 System.out.println("itemid不唯一！！！");
					System.exit(0);
				 }
				 else
				 {
					 String answerx = json.getString("test_ans");
					 String answer[] = answerx.split(",");
					 List<String> endanswer = new ArrayList<>();
					 for(int i=0;i<answer.length-1;i++)
					 {
						 for(int k=0;k<20;k++)
						 {
							 if(answer[i].equals("key"+k))
							 {
								 List<String> itemanswer = itemlist.get(0).getItemAnswer();
								 endanswer.add(itemanswer.get(k));
							 }
						 }
					 }
					 String itemtype = itemlist.get(0).getItemType();
					 if(itemtype.equals("单选题"))
					 {
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
						String an[] = answerx.split("||");
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
			
		}
		single = single.substring(0, single.length()-3);
		multi = multi.substring(0, multi.length()-3);
		fill = fill.substring(0, fill.length()-3);
		subjective = subjective.substring(0, subjective.length()-3);
		RawResult result = new RawResult(studentId, paperId, teacherId, single, multi, fill, subjective, date, "yes");
		AdminMapper.addResult(result);
	}	
}