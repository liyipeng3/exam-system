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
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherMapperTestItem 
{
	@Autowired
	private TeacherMapper tm;
	
	@Test
	public void testAddRawItem() 
	{
		/*try 
		{
			RawItem ri = new RawItem(
			1,"234","2019-8-7","2","1",1.2,"question","option","answer","picture",6.0,"parse");
			tm.addRawItem(ri);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteRawItem()
	{
		/*try 
		{
			RawItem ri = new RawItem(2,"234","2019-8-7","2","1",1.2,"question","option","answer","picture",6.0,"parse");
			tm.deleteRawItem(ri);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testUpdateRawItem()
	{
		/*try 
		{
			RawItem ri = new RawItem();
			ri.setCreaterId("235");
			ri.setItemId(3);
			ri.setItemDate("2020-8-6");
			ri.setItemParse("MyParse");
			tm.updateRawItem(ri);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryRawItem()
	{
		try 
		{
			RawItem ri = new RawItem();
			Integer integer = new Integer(1);
			ri.setItemId(integer);
			List<RawItem> list = tm.queryRawItem(ri);
			for (RawItem ri1 : list) 
			{
				System.out.println(ri1);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
