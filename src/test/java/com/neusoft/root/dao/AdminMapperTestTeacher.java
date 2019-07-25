package com.neusoft.root.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestTeacher 
{
	@Autowired
	private AdminMapper am;

	@Test
	public void testAddTeacher()
	{
		/*try 
		{
			Teacher teacher = new Teacher("236", "zyc", "123", "cs", "se", "hit");
			am.addTeacher(teacher);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteTeacher()
	{
		/*try 
		{
			Teacher teacher = new Teacher("234", "zyc", "123", "cs", "se", "hit");
			am.deleteTeacher(teacher);
		} 
		catch (Exception e) {
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testUpdateTeacher()
	{
		/*try 
		{
			Map<String, Object> teachers = new HashMap<String, Object>();
			teachers.put("ids", new String[]{"234","235"});
			teachers.put("teacherName", "zyc1");
			am.updateTeacher(teachers);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryTeacher()
	{
		try 
		{
			List<Teacher> teachers = am.queryTeacher(null);
			for (Teacher teacher : teachers) 
			{
				System.out.println(teacher);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}