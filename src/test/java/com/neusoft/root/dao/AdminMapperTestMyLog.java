package com.neusoft.root.dao;

import static org.junit.Assert.*;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestMyLog 
{
	@Autowired
	private AdminMapper am;
	
	@Test
	public void testAddMyLog()
	{
		try 
		{
			Date date = new Date(2019, 7, 25);
			MyLog log = new MyLog(1, "111", date, "123", "123", "123");
			am.addMyLog(log);
			
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
	
	@Test
	public void testDeleteStudent()
	{
		/*try 
		{
			Student student = new Student("117371", "zyc", "123", "CS", "SE", "HIT");
			am.deleteStudent(student);
		} catch (Exception e) {
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testUpdateStudent()
	{
		/*try {
			Map<String, Object> students = new HashMap<>();
			students.put("ids", new String[]{"117371","117372"});
			students.put("studentName", "zyc2");
			am.updateStudent(students);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryStudent()
	{
		/*try 
		{
			List<Student> list = am.queryStudent(null);
			for (Student student : list) 
			{
				System.out.println(student);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
}
