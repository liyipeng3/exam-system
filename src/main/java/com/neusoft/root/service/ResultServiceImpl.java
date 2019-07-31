package com.neusoft.root.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.ParsedResult;
import com.neusoft.root.domain.RawResult;

@Service
public class ResultServiceImpl implements ResultService{
	@Autowired
	AdminMapper mapper;

	@Override
	public void addResult(JSONObject json) {
		// TODO Auto-generated method stub
		int i=0;
		String singlechoiceResult ="";
		while(json.getString("singleId"+i)!=null&&(!json.getString("singleId"+i).equals("")))
		{
			singlechoiceResult = singlechoiceResult+json.getString("singleId"+i)+"???"+json.getDouble("singleAnswer"+i)+"###";
			i++;
		}
		if(singlechoiceResult!="")
		singlechoiceResult = singlechoiceResult.substring(0, singlechoiceResult.length()-3);
		i=0;
		String multichoiceResult ="";
		while(json.getString("multiId"+i)!=null&&(!json.getString("multiAnswer"+i).equals("")))
		{
			multichoiceResult = multichoiceResult+json.getString("multiId"+i)+"???"+json.getDouble("multiAnswer"+i)+"!!!";
			i++;
		}
		if(multichoiceResult!="")
			multichoiceResult = multichoiceResult.substring(0,multichoiceResult.length()-3);
		i=0;
		String fillResult ="";
		while(json.getString("fillId"+i)!=null&&(!json.getString("fillId"+i).equals("")))
		{
			fillResult = fillResult+json.getString("fillId"+i)+"???"+json.getDouble("fillAnswer"+i)+"###";
			i++;
		}
		if(fillResult!="")
			fillResult = fillResult.substring(0,fillResult.length()-3);
		i=0;
		String subjectiveResult ="";
		while(json.getString("subjectiveId"+i)!=null&&(!json.getString("subjectiveAnswer"+i).equals("")))
		{
			subjectiveResult = subjectiveResult+json.getString("subjectiveId"+i)+"???"+json.getDouble("subAnswer"+i)+"###";
			i++;
		}
		if(subjectiveResult!="")
			subjectiveResult = subjectiveResult.substring(0,subjectiveResult.length()-3);
		RawResult result = new RawResult(json.getString("studentId"), json.getInteger("paperId"),json.getString("teacherId"), singlechoiceResult, multichoiceResult, fillResult, subjectiveResult, json.getString("submitDate"),json.getString("checked"));
		mapper.addResult(result);
	}


	@Override
	public List<RawResult> queryRawResult(String teacherId) {
		// TODO Auto-generated method stub
		RawResult result = new RawResult();
		result.setTeacherId(teacherId);
		List<RawResult> list = mapper.queryResult(result);
		return list;
	}

	@Override
	public List<ParsedResult> queryParsedResult(String teacherId) {
		// TODO Auto-generated method stub
		RawResult result = new RawResult();
		result.setTeacherId(teacherId);
		List<RawResult> list = mapper.queryResult(result);
		
		return null;
	}


	
}
