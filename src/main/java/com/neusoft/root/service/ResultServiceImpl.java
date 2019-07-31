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

	@Override
	public void addResult(JSONObject json) {
		// TODO Auto-generated method stub
		int i=0;
		String singlechoiceResult ="";
		while(json.getString("singleId"+i)!=null&&(!json.getString("singleId"+i).equals("")))
		{
			singlechoiceResult = singlechoiceResult+json.getString("singleId"+i)+"???"+json.getDouble("singleAnswer"+i)+"!!!";
			i++;
		}
		if(singlechoiceResult!="")
		singlechoiceResult = singlechoiceResult.substring(0, singlechoiceResult.length()-3);
		i=0;
		String multichoiceResult ="";
		while(json.getString("multiId"+i)!=null&&(!json.getString("multiAnswer"+i).equals("")))
		{
			multichoiceResult = multichoiceResult+json.getString("multiId"+i)+"???"+json.getDouble("multiAnswer"+i)+"!!!";
			i++;
		}
		if(multichoiceResult!="")
			multichoiceResult = multichoiceResult.substring(0,multichoiceResult.length()-3);
		i=0;
		String fillResult ="";
		while(json.getString("fillId"+i)!=null&&(!json.getString("fillId"+i).equals("")))
		{
			fillResult = fillResult+json.getString("fillId"+i)+"???"+json.getDouble("fillAnswer"+i)+"!!!";
			i++;
		}
		if(fillResult!="")
			fillResult = fillResult.substring(0,fillResult.length()-3);
		i=0;
		String subjectiveResult ="";
		while(json.getString("subjectiveId"+i)!=null&&(!json.getString("subjectiveAnswer"+i).equals("")))
		{
			subjectiveResult = subjectiveResult+json.getString("subjectiveId"+i)+"???"+json.getDouble("subAnswer"+i)+"!!!";
			i++;
		}
		if(subjectiveResult!="")
			subjectiveResult = subjectiveResult.substring(0,subjectiveResult.length()-3);
		RawResult result = new RawResult(json.getString("studentId"), json.getInteger("paperId"),json.getString("teacherId"), singlechoiceResult, multichoiceResult, fillResult, subjectiveResult, json.getString("submitDate"),json.getString("checked"));
		mapper.addResult(result);
	}


	@Override
	public List<RawResult> queryRawResult(String teacherId) {
		// TODO Auto-generated method stub
		RawResult result = new RawResult();
		result.setTeacherId(teacherId);
		List<RawResult> list = mapper.queryResult(result);
		return list;
	}

	@Override
	public List<ParsedResult> queryParsedResult(String teacherId) {
		// TODO Auto-generated method stub
		RawResult resultx = new RawResult();
		resultx.setTeacherId(teacherId);
		List<RawResult> list = mapper.queryResult(resultx);
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
				String line[] = singleline[i].split("???");
				singleList.add(line[1]);
				re.getSinglechoiceResult().put(line[0],singleList);
			}
			String multiline[] = result1.getMultichoiceResult().split("###");
			for(int i=0;i<multiline.length;i++)
			{
				String line1[] = multiline[i].split("???");
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
				String line2[] = fillline[i].split("???");
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
				String line3[] = subjectline[i].split("???");
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
