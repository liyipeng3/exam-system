package com.neusoft.root.domain;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//学生答题结果
public class ParsedResult 
{
	private String studentId; //学生ID
	private Integer paperId; //试卷ID
	private String teacherId;
	private Map<String, List<String>> singlechoiceResult; //单选题结果，格式：ID1，分数1###ID2，分数2###
	private Map<String, List<String>> multichoiceResult; //多选题结果，格式：ID1，分数1###ID2，分数2###
	private Map<String, List<String>> fillResult; //填空题结果，格式：ID1，分数1###ID2，分数2###
	private Map<String, List<String>> subjectiveResult; // 主观题结果，格式：ID1，分数1###ID2，分数2###
	private String submitDate; //答题日期
	private String checked;  //是否被批阅
	
}
