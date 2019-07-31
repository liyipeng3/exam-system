package com.neusoft.root.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.alibaba.fastjson.JSONObject;
@RunWith(SpringRunner.class)
@SpringBootTest
public class testPaperCheckingServiceImpl {

	@Autowired
	private CheckService test;
	@Test
	public void testParsePaperChecking()
	{
		JSONObject json = new JSONObject();
		json.put("studentId", 117371);
		json.put("paperId", 1);
		json.put("teacherId",227371);
		test.queryPaperChecking(json);
	}
}
