package com.neusoft.root.dao;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.RawCheck;
import com.neusoft.root.domain.RawResult;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherMapperTestResult 
{
	@Autowired
	private TeacherMapper tm;
	@Test
	public void testQueryResult()
	{
		try 
		{
			RawResult rr = new RawResult();
			rr.setTeacherId("227372");
			rr.setChecked("no");
			for (RawResult r1 : tm.queryResult(rr)) 
			{
				System.out.println(r1);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
