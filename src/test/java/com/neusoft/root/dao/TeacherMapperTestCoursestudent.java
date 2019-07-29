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
import com.neusoft.root.domain.Coursestudent;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherMapperTestCoursestudent 
{
	@Autowired
	private TeacherMapper tm;
		
	@Test
	public void testQuerystudent()
	{
		try 
		{
			Coursestudent cs = new Coursestudent();
			cs.setStudentId("117371");
			for (Coursestudent cs1 : tm.queryCoursestudent(cs)) 
			{
				System.out.println(cs1);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
