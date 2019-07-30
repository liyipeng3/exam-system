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
		while(json.getString("singlechoiceResult"+i)!=null)
		{
			singlechoiceResult = singlechoiceResult+json.getString("singlechoiceResult"+i)+","+json.getDouble("score"+i)+"###";
			i++;
		}
		if(singlechoiceResult!="")
		singlechoiceResult = singlechoiceResult.substring(0, singlechoiceResult.length()-3);
		i=0;
		String multichoiceResult ="";
		while(json.getString("multichoiceResult"+i)!=null)
		{
			multichoiceResult = multichoiceResult+json.getString("multichoiceResult"+i)+","+json.getDouble("score"+i)+"###";
			i++;
		}
		if(multichoiceResult!="")
			multichoiceResult = multichoiceResult.substring(0,multichoiceResult.length()-3);
		i=0;
		String fillResult ="";
		while(json.getString("fillResult"+i)!=null)
		{
			fillResult = fillResult+json.getString("fillResult"+i)+","+json.getDouble("score"+i)+"###";
			i++;
		}
		if(fillResult!="")
			fillResult = fillResult.substring(0,fillResult.length()-3);
		i=0;
		String subjectiveResult ="";
		while(json.getString("subjectiveResult"+i)!=null)
		{
			subjectiveResult = subjectiveResult+json.getString("subjectiveResult"+i)+","+json.getDouble("score"+i)+"###";
			i++;
		}
		if(subjectiveResult!="")
			subjectiveResult = subjectiveResult.substring(0,subjectiveResult.length()-3);
		RawResult result = new RawResult(json.getString("studentId"), json.getInteger("paperId"), singlechoiceResult, multichoiceResult, fillResult, subjectiveResult, json.getString("submitDate"),json.getString("checked"));
		mapper.addResult(result);
	}


	@Override
	public List<RawResult> queryRawResult(JSONObject json) {
		// TODO Auto-generated method stub
	//	Result result = new Result(json.getString("studentId"), json.getInteger("paperId"), json.getString("singlechoiceResult"), json.getString("multichoiceResult"), json.getString("fillResult"), json.getString("subjectiveResult"), json.getString("submitDate"));
		//List<Result> list = mapper.queryResult(result);
		return null;
	}

	@Override
	public List<ParsedResult> queryParsedResult(JSONObject json) {
		// TODO Auto-generated method stub
		return null;
	}


	
}
