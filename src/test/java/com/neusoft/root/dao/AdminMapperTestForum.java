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
public class AdminMapperTestForum 
{
	@Autowired
	private AdminMapper am;
	
	@Test
	public void testAddForum()
	{
		/*try 
		{
			Forum forum = new Forum(1, "2019-7-16", "1", "anti", "1", "1");
			am.addForum(forum);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteForum()
	{
		/*try 
		{
			Forum forum = new Forum();
			forum.setSenderId("1");
			am.deleteForum(forum);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryManageteacher()
	{
		try 
		{
			List<Forum> list = am.queryForum(null);
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
