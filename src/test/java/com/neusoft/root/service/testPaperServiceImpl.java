package com.neusoft.root.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.alibaba.fastjson.JSONObject;
@RunWith(SpringRunner.class)
@SpringBootTest
public class testPaperServiceImpl {

	@Autowired
	private PaperService test;
	@Test
	public void testaddRawPaper()
	{
		JSONObject json = new JSONObject();
		json.put("paperId", 5);
		json.put("difficult", "普通题");
		json.put("singleQuestion1","1");
		json.put("singleQuestion2","2");
		json.put("mutiQuestion1","3");
		json.put("mutiQuestion2","2");
		json.put("singleScore1",0.8);
		json.put("singleScore2",0.8);
		json.put("mutiScore1",0.8);
		json.put("mutiScore2",0.8);
		json.put("fillQuestion1","qu4");
		json.put("fillQuestion2","qu5");
		json.put("fillScore1",0.8);
		json.put("fillScore2",0.8);
		json.put("subjectiveQuestion1","qu6");
		json.put("subjectiveQuestion2","qu7");
		json.put("subjectiveScore1",0.8);
		json.put("subjectiveScore2",0.9);
		json.put("paperName","qu8");
		json.put("createrId","qu9");
		json.put("createDate","qu10");
		json.put("paperType","qu");
		//json.put("paperIndex",5.0);
		json.put("paperScore",0.9);
		json.put("paperSecrecy","qu11");
		json.put("paperRemark","qu12");
		System.out.println(test.queryParsedPaper(5).toString());
		//test.addRawPaper(json);
	}
}
