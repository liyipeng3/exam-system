package com.neusoft.root.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.Class1;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestClass 
{
	@Autowired
	private AdminMapper am;

	@Test
	public void testAddClass()
	{
		/*try 
		{
			Class1 classroom = new Class1("125", "zyc", 65);
			am.addClass(classroom);
		} catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteClass()
	{
		/*try 
		{
			am.deleteClass(new Class1("123", "zyc", 65));
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}

	@Test
	public void testUpdateClass()
	{
		/*try 
		{
			Map<String, Object> classes = new HashMap<String, Object>();
			classes.put("ids", new String[]{"123","124"});
			classes.put("className", "zyc1");
			am.updateClass(classes);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryClass()
	{
		try 
		{
			Class1 classroom = new Class1("", "", 65);
			List<Class1> classes = am.queryClass(classroom);
			for (Class1 class1 : classes) 
			{
				System.out.println(class1);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}