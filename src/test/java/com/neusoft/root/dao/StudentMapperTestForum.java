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
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StudentMapperTestForum 
{
	@Autowired
	private StudentMapper sm;
	
	@Test
	public void testAddForum() 
	{
		/*try {
			Forum forum = new Forum(1,"2019-7-17","3","anti","3","3");
			sm.addForum(forum);
		} catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteForum()
	{
		/*try 
		{
			Forum forum = new Forum(1,"2019-7-17","3","anti","3","3");
			sm.deleteForum(forum);
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
			List<Forum> list = sm.queryForum(null);
			for (Forum forum : list) 
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
