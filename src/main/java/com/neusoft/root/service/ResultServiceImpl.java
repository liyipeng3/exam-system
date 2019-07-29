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
		//Result result = new Result(json.getString("studentId"), json.getInteger("paperId"), json.getString("singlechoiceResult"), json.getString("multichoiceResult"), json.getString("fillResult"), json.getString("subjectiveResult"), json.getString("submitDate"));
		//mapper.addResult(result);
	}


	@Override
	public List<RawResult> queryRawResult(JSONObject json) {
		// TODO Auto-generated method stub
		//Result result = new Result(json.getString("studentId"), json.getInteger("paperId"), json.getString("singlechoiceResult"), json.getString("multichoiceResult"), json.getString("fillResult"), json.getString("subjectiveResult"), json.getString("submitDate"));
		//List<Result> list = mapper.queryResult(result);
		return null;
	}

	@Override
	public List<ParsedResult> queryParsedResult(JSONObject json) {
		// TODO Auto-generated method stub
		return null;
	}


	
}
