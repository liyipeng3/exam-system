package com.neusoft.root.service;

import java.util.ArrayList;
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
	@Autowired 
	TeacherMapper teachermapper;
	@Override
	public void addResult(JSONObject json) {
		// TODO Auto-generated method stub
		int i=1;
		int j=1;
		String singlechoiceResult ="";
		while(json.getString("singleId"+i)!=null&&(!json.getString("singleId"+i).equals("")))
		{
			String singleanswer = "";
			  j=1;
			while(json.getString("single"+i+"answer"+j)!=null)
			{
				singleanswer = singleanswer + json.getString("single"+i+"answer"+j)+"!!!";
				j++;
			}
			if(!singleanswer.equals(""))
			{
				singleanswer = singleanswer.substring(0, singleanswer.length()-3);
			}
			singlechoiceResult = singlechoiceResult+json.getString("singleId"+i)+"???"+singleanswer+"###";
			i++;
		}
		if(!singlechoiceResult.equals(""))
		{
			singlechoiceResult = singlechoiceResult.substring(0, singlechoiceResult.length()-3);
		}
		i=1;
		String multichoiceResult ="";
		while(json.getString("multiId"+i)!=null&&(!json.getString("multiId"+i).equals("")))
		{
			String multianswer = "";
			  j=1;
			while(json.getString("multi"+i+"answer"+j)!=null)
			{
				multianswer = multianswer + json.getString("multi"+i+"answer"+j)+"!!!";
				j++;
			}
			if(!multianswer.equals(""))
			{
				multianswer = multianswer.substring(0, multianswer.length()-3);
			}
			multichoiceResult = multichoiceResult+json.getString("multiId"+i)+"???"+multianswer+"###";
			i++;
		}
		if(multichoiceResult!="")
			multichoiceResult = multichoiceResult.substring(0,multichoiceResult.length()-3);
		i=0;
		String fillResult ="";
		while(json.getString("fillId"+i)!=null&&(!json.getString("fillId"+i).equals("")))
		{
			String fillanswer = "";
			  j=1;
			while(json.getString("fill"+i+"answer"+j)!=null)
			{
				fillanswer = fillanswer + json.getString("fill"+i+"answer"+j)+"!!!";
				j++;
			}
			if(!fillanswer.equals(""))
			{
				fillanswer = fillanswer.substring(0, fillanswer.length()-3);
			}
			fillResult = fillResult+json.getString("fillId"+i)+"???"+fillanswer+"###";
			i++;
		}
		if(fillResult!="")
			fillResult = fillResult.substring(0,fillResult.length()-3);
		i=0;
		String subResult ="";
		while(json.getString("subjectiveId"+i)!=null&&(!json.getString("subjectiveId"+i).equals("")))
		{
			String subanswer = "";
			  j=1;
			while(json.getString("sub"+i+"answer"+j)!=null)
			{
				subanswer = subanswer + json.getString("sub"+i+"answer"+j)+"!!!";
				j++;
			}
			if(!subanswer.equals(""))
			{
				subanswer = subanswer.substring(0, subanswer.length()-3);
			}
			subResult = subResult+json.getString("subjectiveId"+i)+"???"+subanswer+"###";
			i++;
		}
		if(subResult!="")
			subResult = subResult.substring(0,subResult.length()-3);
		RawResult result = new RawResult(json.getString("studentId"), json.getInteger("paperId"),json.getString("teacherId"), singlechoiceResult, multichoiceResult, fillResult, subResult, json.getString("submitDate"),"no");
		System.out.println(result);
		mapper.addResult(result);
	}


	@Override
	public List<RawResult> queryRawResult(String teacherId) {
		// TODO Auto-generated method stub
		RawResult result = new RawResult();
		result.setTeacherId("ccc");
		List<RawResult> list = teachermapper.queryResult(result);
		return list;
	}

	@Override
	public List<ParsedResult> queryParsedResult(String teacherId) {
		// TODO Auto-generated method stub
		RawResult resultx = new RawResult();
		resultx.setTeacherId(teacherId);
		List<RawResult> list = teachermapper.queryResult(resultx);
		List<ParsedResult> result = new ArrayList<>(); 
		for(RawResult result1:list)
		{
			List<String> singleList = new ArrayList<>();
			List<String> multiList = new ArrayList<>();
			List<String> fillList = new ArrayList<>();
			List<String> subjectList = new ArrayList<>();
			ParsedResult re = new ParsedResult();
			re.setStudentId(result1.getStudentId());
			re.setPaperId(result1.getPaperId());
			re.setTeacherId(result1.getTeacherId());
			re.setSubmitDate(result1.getSubmitDate());
			re.setChecked(result1.getChecked());
			
			String singleline[] = result1.getSinglechoiceResult().split("###");
			for(int i=0;i<singleline.length;i++)
			{
				String line[] = singleline[i].split("\\?\\?\\?");
				singleList.add(line[1]);
				re.getSinglechoiceResult().put(line[0],singleList);
			}
			String multiline[] = result1.getMultichoiceResult().split("###");
			for(int i=0;i<multiline.length;i++)
			{
				String line1[] = multiline[i].split("\\?\\?\\?");
				String line11[] = line1[1].split("!!!");
				for(int j=0;j<line11.length;j++)
				{
					multiList.add(line11[j]);
				}
				re.getMultichoiceResult().put(line1[0], multiList);
			}
			String fillline[] = result1.getFillResult().split("###");
			for(int i=0;i<fillline.length;i++)
			{
				String line2[] = fillline[i].split("\\?\\?\\?");
				String line21[] = line2[1].split("!!!");
				for(int j=0;j<line21.length;j++)
				{
					fillList.add(line21[j]);
				}
				re.getFillResult().put(line2[0], fillList);
			}
			String subjectline[] = result1.getSubjectiveResult().split("###");
			for(int i=0;i<subjectline.length;i++)
			{
				String line3[] = subjectline[i].split("\\?\\?\\?");
				String line31[] = line3[1].split("!!!");
				for(int j=0;j<line31.length;j++)
				{
					subjectList.add(line31[j]);
				}
				re.getSubjectiveResult().put(line3[0], subjectList);
			}
			result.add(re);
			
		}
		
		
		
		return result;
	}


	@Override
	public void update(String studentId, String paperId, String teacherId) {
		// TODO Auto-generated method stub
		
	}


	
}
