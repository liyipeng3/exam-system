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
public class AdminMapperTestTeacher 
{
	@Autowired
	private AdminMapper am;
	
	@Test
	public void testAddManageteacher()
	{
		/*try 
		{
			Manageteacher mt = new Manageteacher("125","235","123","2019-7-25");
			am.addManageteacher(mt);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteManageteacher()
	{
		/*try 
		{
			Manageteacher mt = new Manageteacher("125","235","123","2019-7-25");
			am.deleteManageteacher(mt);
		} 
		catch (Exception e) {
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testUpdateManageteacher()
	{
		/*try 
		{
			Manageteacher mt = new Manageteacher("125","234","123","2019-7-27");
			am.updateManageteacher(mt);
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
			List<Manageteacher> list = am.queryManageteacher(null);
			for (Manageteacher mt : list) 
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
