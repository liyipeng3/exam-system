package com.neusoft.root.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.RawResult;

@RunWith(SpringRunner.class)
@SpringBootTest
public class testResultServiceImpl {

	@Autowired
	private ResultService test;
	@Test
	public void testqueryrawPaper()
	{
		for ( RawResult x : test.queryRawResult("ccc")) {
			System.out.println(x);
		}
	}
	@Test
	public void testqueryParsedPaper()
	{
		System.out.println(test.queryParsedResult("ccc"));
	}
	@Test
	public void testaddRawPaper()
	{
		JSONObject json = new JSONObject();
		json.put("singleId1", "5");
		json.put("single1answer1", "answer1");
		json.put("multId1","1");
		json.put("multi1Id1","answer2");
		json.put("fillId1","3");
		json.put("fill1answer1","answer3");
		json.put("subjectiveId1","ddd");
		json.put("sub1answer1","0.8");
		json.put("studentId","0.8");
		json.put("paperId",0.8);
		json.put("teacherId","dddd");
		json.put("submitDate","qu5");
		test.addResult(json);
	}
}
