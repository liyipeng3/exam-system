package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

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
	public void testaddresult()
	{
		List<JSONObject> json = new ArrayList<>();
		JSONObject json1 = new JSONObject();
		json1.put("date","2019-08-01 18:19");
		json1.put("test_ans","key1,");
		json1.put("exam_id", "1");
		//json1.put("test_id", value)
		test.addResult(json);
	}
}
