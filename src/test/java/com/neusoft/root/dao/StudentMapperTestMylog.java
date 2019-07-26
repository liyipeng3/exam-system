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
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StudentMapperTestMylog 
{
	@Autowired
	private StudentMapper sm;
	
	@Test
	public void testAddMylog() 
	{
		/*try 
		{
			MyLog log = new MyLog(1, "113", "2019-7-8", "123", "123", "123");
			sm.addMyLog(log);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryForum()
	{
		try 
		{
			MyLog log = new MyLog();
			log.setOpId("zyc");
			List<MyLog> list = sm.queryMyLog(log);
			for (MyLog forum : list) 
			{
				System.out.println(forum);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
