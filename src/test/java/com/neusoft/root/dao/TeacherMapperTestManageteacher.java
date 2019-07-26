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
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Manageteacher;
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherMapperTestManageteacher 
{
	@Autowired
	private TeacherMapper tm;
	
	@Test
	public void testQueryManageteacher()
	{
		try 
		{
			Manageteacher teacher = new Manageteacher("123", "234", "1", "java","2019-7-8","2019-7-8");
			List<Manageteacher> list = tm.queryManageteacher(teacher);
			for (Manageteacher ms : list) 
			{
				System.out.println(ms);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
