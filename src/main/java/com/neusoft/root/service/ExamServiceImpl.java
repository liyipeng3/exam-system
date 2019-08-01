package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import org.omg.CORBA.PUBLIC_MEMBER;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.Exam;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Teacher;


@Service
public class ExamServiceImpl implements ExamService
{
	@Autowired 
	private TeacherMapper teachermapper;
	
	@Override
	public Integer addExam(JSONObject json)
	{
		Integer paperId = Integer.valueOf(json.getString("paperId"));
		String createrId = json.getString("createrId");
		String examName = json.getString("examName");
		Double passScore = Double.valueOf(json.getString("passScore"));
		//差出试卷
		RawPaper rawPaper = new RawPaper();
		rawPaper.setPaperId(paperId);
		RawPaper targetRawPaper = teachermapper.queryRawPaper(rawPaper).get(0);
		//查出总分
		Double sumScore = targetRawPaper.getPaperScore();
		//查出科目
		String examType = targetRawPaper.getPaperType();
		
		String createDate = json.getString("createDate");
		String examBegin = json.getString("examBegin");
		String examEnd = json.getString("examEnd");
		Double examLast = Double.valueOf(json.getString("examLast"));
		String examRemark = json.getString("examRemark");
		
		Exam exam = new Exam(1, paperId, createrId, examName, examType, passScore, sumScore, createDate, examBegin, examEnd, examLast, examRemark);
		teachermapper.addExam(exam);
		exam.setExamId(null);
		return teachermapper.queryExam(exam).get(0).getExamId();
	}
	
	@Override
	public List<Exam> queryExam(JSONObject json) 
	{
		
		String examId = json.getString("examId");
		if (examId==null||examId.equals("")) 
		{
			return teachermapper.queryExam(null);
		}
		else
		{
			Exam exam = new Exam();
			exam.setExamId(Integer.valueOf(examId));
			Exam exam1 = teachermapper.queryExam(exam).get(0);
			return teachermapper.queryExam(exam);
		}
	}
}
