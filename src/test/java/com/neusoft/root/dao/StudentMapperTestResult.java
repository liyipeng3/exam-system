package com.neusoft.root.dao;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.javassist.expr.NewArray;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.Forum;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Manageteacher;
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.RawResult;
import com.neusoft.root.domain.Student;


@RunWith(SpringRunner.class)
@SpringBootTest
public class StudentMapperTestResult 
{
	@Autowired
	private StudentMapper sm;
		
	@Test
	public void testAddResult()
	{
		try 
		{
			RawResult result = new RawResult("117371", 1, "1","1", "1", "1", "1","2019-8-5","no");
			sm.addResult(result);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
