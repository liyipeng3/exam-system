package com.neusoft.root.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

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
}
