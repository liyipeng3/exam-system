package com.neusoft.root.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.alibaba.fastjson.JSONObject;

@RunWith(SpringRunner.class)
@SpringBootTest
public class testItemServiceImpl {

	@Autowired
	private ItemService test;
	@Test
	public void test()
	{
		JSONObject json = new JSONObject();
		json.put("option_length", 1);
		json.put("difficult", "简单");
		json.put("key1Editor", "option");
		json.put("itemType", "多选题");
		json.put("itemId", 1);
		json.put("createrId", "aa");
		json.put("itemDate", "ddd");
		json.put("subject", "ddd");
		//json.put("itemType", "sss");
		json.put("questionEditor", "aaa");
		json.put("answer1", "key1Editor");
		json.put("analysisEditor", "tttd");
		json.put("itemId", 7);
		System.out.println(test.queryParsedItem(new Integer(6)));
	}

}
