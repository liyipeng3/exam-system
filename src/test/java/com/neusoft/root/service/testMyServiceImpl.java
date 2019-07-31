package com.neusoft.root.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.RawResult;

@RunWith(SpringRunner.class)
@SpringBootTest
public class testMyServiceImpl {

	@Autowired
	private MyService test;
	
	@Test
	public void testqueryParsedPaper()
	{
		ParsedPaper pp = test.queryParsedPaper(1);
		System.out.println(pp);
	}
}
