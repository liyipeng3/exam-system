package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

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
	TeacherMapper teachermapper;

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
	public List<String> queryAllCourse() {
		// TODO Auto-generated method stub
		return null;
	}

	
	
}
