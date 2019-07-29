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
import com.neusoft.root.domain.RawCheck;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Manageteacher;
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestAdmin 
{
	@Autowired
	private AdminMapper am;
	
	@Test
	public void testQueryCheck()
	{
		try 
		{
			Admin admin = new Admin("J117371",null,"123");
			List<Admin> list = am.queryAdmin(admin);
			for (Admin mt : list) 
			{
				System.out.println(mt);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
