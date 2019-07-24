package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.Paper;
import com.neusoft.root.domain.Subjects;

@Service
public class GetPaperCourseImpl implements GetPaperCourse{
	@Autowired
	TeacherMapper teachermapper;

	@Override
	public List<Paper> getPaperCourse(String subjects) {
		// TODO Auto-generated method stub
		List<Paper> paperlist = new ArrayList<>();
		
			Paper paper = new Paper(null, subjects, null, null, null, null, null, null, null);
			paperlist =teachermapper.queryPaper(paper);
		
		return paperlist;
	}
	
}
