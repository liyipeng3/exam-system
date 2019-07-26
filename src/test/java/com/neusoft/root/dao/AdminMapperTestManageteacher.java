package com.neusoft.root.dao;

import static org.junit.Assert.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
public class AdminMapperTestManageteacher 
{
	@Autowired
	private AdminMapper am;
	
	@Test
	public void testAddManagestudent()
	{
		/*try 
		{
			Manageteacher mt = new Manageteacher("123", "235", "123", "java", "2019-7-15","2019-7-15");
			am.addManageteacher(mt);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteManagestudent()
	{
		/*try 
		{
			Manageteacher mt = new Manageteacher("123", "235", "123", "java", "2019-7-15","2019-7-15");
			am.deleteManageteacher(mt);
		} catch (Exception e) {
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testUpdateManageteacher()
	{
		try 
		{
			Manageteacher mt = new Manageteacher("124", "234", "123", "JAVA++", "2019-7-16","2019-7-2");
			am.updateManageteacher(mt);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
	
	@Test
	public void testQueryManageteacher()
	{
		/*try 
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
		}*/
	}
}
