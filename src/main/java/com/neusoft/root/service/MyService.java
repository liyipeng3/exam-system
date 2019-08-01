package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.domain.ParsedPaper;
/**
 * log
 * @author Warriors
 *
 */
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.StudentResult;
public interface MyService 
{
	
	public ParsedPaper queryParsedPaper(Integer paperId);
	
	public List<StudentResult> queryStudentResult(Integer examId);
}
