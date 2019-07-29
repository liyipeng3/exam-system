package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.TeacherMapper;

import com.neusoft.root.domain.RawPaper;

import com.neusoft.root.domain.Subjects;


@Service
public class PaperServiceImpl implements PaperService{
	@Autowired
	TeacherMapper teachermapper;

	@Override
	public List<RawPaper> getPaperCourse(JSONObject json) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addRawPaper(RawPaper paper) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteRawPaper(RawPaper paper) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateRawPaper(RawPaper paper) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<RawPaper> queryRawPaper(RawPaper paper) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
}
