package com.neusoft.root.service;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.ParsedPaper;
@RunWith(SpringRunner.class)
@SpringBootTest
public class testPaperServiceImpl {

	@Autowired
	private PaperService test;
	@Test
	public void testaddRawPaper()
	{
		/*JSONObject json = new JSONObject();
		json.put("paperId", 1);
		json.put("paperName", "普通题");
		json.put("testIds1","1");
		json.put("testIds2","2");
		json.put("testType1","3");
		json.put("mutiQuestion2","2");
		json.put("singleScore1",0.8);
		json.put("singleScore2",0.8);
		json.put("mutiScore1",0.8);
		json.put("mutiScore2",0.8);
		json.put("fillQuestion1","");
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
		//System.out.println(test.queryParsedPaper(5).toString());
		//test.addRawPaper(json);
		//System.out.println(test.createPaper("ddd","单选题" ).toString());
		//System.out.println(test.randPaper("dddddd","ddd", "id"));
		test.addRawPaper(json);
*/		
		
		ParsedPaper c=  test.queryParsedPaper(1);
		System.out.println(c);
	}
}
