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
import com.neusoft.root.domain.Courseteacher;


@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherMapperTestCourseteacher 
{
	@Autowired
	private TeacherMapper tm;
		
	@Test
	public void testQueryCourseteacher()
	{
		try 
		{
			Courseteacher ct = new Courseteacher();
			ct.setTeacherId("234");
			for (Courseteacher ct1 : tm.queryCourseteacher(ct)) 
			{
				System.out.println(ct1);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
