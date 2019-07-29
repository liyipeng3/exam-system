package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neusoft.root.dao.TeacherMapper;

import com.neusoft.root.domain.RawPaper;

import com.neusoft.root.domain.Subjects;


@Service
public class PaperServiceImpl implements PaperService{
	@Autowired
	TeacherMapper teachermapper;

	@Override
	public List<RawPaper> getPaperCourse(String subjects) {
		// TODO Auto-generated method stub
		List<RawPaper> paperlist = new ArrayList<>();
		
			RawPaper paper = new RawPaper(null, null, null, null, subjects, null, null, null, null, null, null, null, null);
			paperlist =teachermapper.queryRawPaper(paper);
		return paperlist;
	}
	
}
