package com.neusoft.root.dao;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.reflection.wrapper.BaseWrapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.RawCheck;



@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherMapperTestCheck 
{
	@Autowired
	private TeacherMapper tm;
		
	@Test
	public void testAddCheck()
	{
		/*try 
		{
			RawCheck check = new RawCheck("117372", 1, "227371", "1", "1", "1", "1", 10.0, "2019-8-6");
			tm.addCheck(check);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteCheck()
	{
		try 
		{
			RawCheck check2 = new RawCheck("1", 1, "1", "1", "1", "1", "1", 10.0, "2019-7-2");
			tm.deleteCheck(check2);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
	
	@Test
	public void testUpdateCheck()
	{
		/*try 
		{
			RawCheck check = new RawCheck("117371", 1, "227371", "1", "1", "1", "1", 20.0, "2019-8-6");
			tm.updateCheck(check);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryCheck()
	{
		/*try 
		{
			RawCheck check = new RawCheck("117371", 1, "227371", "1", "1", "1", "1", 20.0, "2019-8-6");
			for (RawCheck check2 : tm.queryCheck(check)) 
			{
				System.out.println(check2);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
}
