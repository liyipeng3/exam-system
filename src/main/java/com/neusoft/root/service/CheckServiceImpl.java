package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.ItemChecking;
import com.neusoft.root.domain.PaperChecking;
import com.neusoft.root.domain.ParsedCheck;
import com.neusoft.root.domain.RawCheck;
import com.neusoft.root.domain.RawResult;

@Service
public class CheckServiceImpl implements CheckService{
	@Autowired
	TeacherMapper mapper;
	
	@Override
	public void addCheck(JSONObject json) {
		// TODO Auto-generated method stub
		int count =1;
		String singleQuestion ="";
		while(json.getString("singlechoiceScore"+count)!=null)
		{
			singleQuestion = singleQuestion+json.getString("singlechoiceScore"+count)+"###";
			count++;
		}
		if(count!=1)
		{
			singleQuestion = singleQuestion.substring(0, singleQuestion.length()-3);
		}
		count =1;
		String multiQuestion ="";
		while(json.getString("multichoiceScore"+count)!=null)
		{
			multiQuestion = multiQuestion+json.getString("multichoiceScore"+count)+"###";
			count++;
		}
		if(count!=1)
		{
			multiQuestion = multiQuestion.substring(0, multiQuestion.length()-3);
		}
		count =1;
		String fillQuestion ="";
		while(json.getString("fillScore")!=null)
		{
			fillQuestion = fillQuestion+json.getString("fillScore"+count)+"###";
			count++;
		}
		if(count!=1)
		{
			fillQuestion = fillQuestion.substring(0, fillQuestion.length()-3);
		}	
		count =1;
		String subQuestion ="";
		while(json.getString("subjectiveScore")!=null)
		{
			subQuestion = subQuestion+json.getString("subjectiveScore"+count)+"###";
			count++;
		}
		if(count!=1)
		{
			subQuestion = subQuestion.substring(0, subQuestion.length()-3);
		}
		RawCheck check = new RawCheck(json.getString("studentId"), json.getInteger("paperId"), json.getString("teacherId"), singleQuestion, multiQuestion, fillQuestion, subQuestion, json.getDouble("sumScore"), json.getString("checkDate"));
		mapper.addCheck(check);
	}

	@Override
	public void deleteCheck(JSONObject json) {
		// TODO Auto-generated method stub
		RawCheck check = new RawCheck(json.getString("studentId"), json.getInteger("paperId"), json.getString("teacherId"), json.getString("singlechoiceScore"), json.getString("multichoiceScore"), json.getString("fillScore"), json.getString("subjectiveScore"), json.getDouble("sumScore"), json.getString("checkDate"));	
		mapper.deleteCheck(check);
	}

	@Override
	public void updateCheck(JSONObject json) {
		// TODO Auto-generated method stub
		//Check check = new Check(json.getString("studentId"), json.getInteger("paperId"), json.getString("teacherId"), json.getString("singlechoiceScore"), json.getString("multichoiceScore"), json.getString("fillScore"), json.getString("subjectiveScore"), json.getDouble("sumScore"), json.getString("checkDate"));		
		//mapper.updateCheck(check);
	}

	@Override
	public List<ParsedCheck> queryParsedCheck(JSONObject json) {
		// TODO Auto-generated method stub
		//Check check = new Check(json.getString("studentId"), json.getInteger("paperId"), json.getString("teacherId"), json.getString("singlechoiceScore"), json.getString("multichoiceScore"), json.getString("fillScore"), json.getString("subjectiveScore"), json.getDouble("sumScore"), json.getString("checkDate"));
		//List<Check> list= mapper.queryCheck(check);
		return null;
	}

	@Override
	public List<RawCheck> queryRawCheck(JSONObject json) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PaperChecking> queryPaperChecking(JSONObject json) 
	{
		List<PaperChecking> checkings = new ArrayList<>();
		
		RawResult rr = new RawResult();
		rr.setStudentId(json.getString("studentId"));
		rr.setPaperId(Integer.valueOf(json.getString("paperId")));
		rr.setTeacherId(json.getString("teacherId"));
		List<RawResult> rawResults = mapper.queryResult(rr);
		if (rawResults.size()==0) 
		{
			System.out.println("逻辑错误");
			System.exit(1);
		}
		RawResult result = rawResults.get(0);
		
		Integer itemId;
		String studentAnswer;
		String[] line;
		String[] detail;
 		if (result.getSinglechoiceResult()!=null&&(!result.getSinglechoiceResult().equals(""))) 
		{
			line = result.getSinglechoiceResult().split("###");
			 
			for (int i = 0; i < line.length; i++) 
			{
				detail = line[i].split("???");
				itemId = Integer.valueOf(detail[0]);
				studentAnswer = detail[1];
				
			}
		}
		return null;
	}

	
	
}
