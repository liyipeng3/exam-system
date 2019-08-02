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
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.RawCheck;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Manageteacher;
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestCheck 
{
	@Autowired
	private AdminMapper am;

	@Test
	public void testQueryCheck()
	{
		/*try 
		{
			List<RawCheck> list = am.queryCheck(null);
			for (RawCheck mt : list) 
			{
				System.out.println(mt);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testAddCourse()
	{
		try {
			Course course = new Course(1, "1", "1", "1", "1", "1", "1");
			am.addCource(course);
		} catch (Exception e) {
			System.out.println(e);
		}
		
	}
}
