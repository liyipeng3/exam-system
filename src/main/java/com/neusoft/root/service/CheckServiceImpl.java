package com.neusoft.root.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.ParsedCheck;
import com.neusoft.root.domain.RawCheck;

@Service
public class CheckServiceImpl implements CheckService{
	@Autowired
	TeacherMapper mapper;
	@Override
	public void addCheck(JSONObject json) {
		// TODO Auto-generated method stub
		/*int count =1;
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
			singleQuestion = singleQuestion.substring(0, singleQuestion.length()-3);
		}
		count =1;
		String singleQuestion ="";
		while(json.getString("singleQuestion")!=null)
		{
			singleQuestion = singleQuestion+json.getString("singleQuestion"+count)+"###";
			count++;
		}
		if(count!=1)
		{
			singleQuestion = singleQuestion.substring(0, singleQuestion.length()-3);
		}	
		count =1;
		String singleQuestion ="";
		while(json.getString("singleQuestion")!=null)
		{
			singleQuestion = singleQuestion+json.getString("singleQuestion"+count)+"###";
			count++;
		}
		if(count!=1)
		{
			singleQuestion = singleQuestion.substring(0, singleQuestion.length()-3);
		}
		RawCheck check = new RawCheck(json.getString("studentId"), json.getInteger("paperId"), json.getString("teacherId"), , json.getString("multichoiceScore"), json.getString("fillScore"), json.getString("subjectiveScore"), json.getDouble("sumScore"), json.getString("checkDate"));
		mapper.addCheck(check);*/
	}

	@Override
	public void deleteCheck(JSONObject json) {
		// TODO Auto-generated method stub
		//Check check = new Check(json.getString("studentId"), json.getInteger("paperId"), json.getString("teacherId"), json.getString("singlechoiceScore"), json.getString("multichoiceScore"), json.getString("fillScore"), json.getString("subjectiveScore"), json.getDouble("sumScore"), json.getString("checkDate"));	
		//mapper.deleteCheck(check);
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


	
}
