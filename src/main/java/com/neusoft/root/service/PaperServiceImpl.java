package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.RawPaper;

import com.neusoft.root.domain.Subjects;


@Service
public class PaperServiceImpl implements PaperService{
	@Autowired
	TeacherMapper mapper;

	@Override
	public void addRawPaper(JSONObject json) {
		// TODO Auto-generated method stub
		//RawPaper rawPaper = new RawPaper(paperId, paperName, createrId, createDate, paperType, paperIndex, singlechoiceQuestion, multichoiceQuestion, fillQuestion, subjectiveQuestion, paperScore, paperSecrecy, paperRemark);
	}

	@Override
	public void deleteRawPaper(JSONObject json) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateRawPaper(JSONObject json) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<ParsedPaper> queryRawPaper(JSONObject json) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<String> queryPaperCourse() {
		// TODO Auto-generated method stub
		List<RawPaper> list = mapper.queryRawPaper(null);
		Set<String> set = new HashSet<>();
		for(RawPaper x:list)
		{
			set.add(x.getPaperType());
		}
		List<String> list2 = new ArrayList<>();
		for(String s:set)
		{
			list2.add(s);
		}
		return list2;
	}	
	
	
}
