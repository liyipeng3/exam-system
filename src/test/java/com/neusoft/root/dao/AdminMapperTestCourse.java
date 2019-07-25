package com.neusoft.root.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mysql.cj.x.protobuf.MysqlxDatatypes.Scalar.String;
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestCourse 
{
	@Autowired
	private AdminMapper am;

	@Test
	public void testAddCource()
	{
		/*try 
		{
			Course course = new Course("125","zyc","zyc");
			am.addCource(course);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteCourse()
	{
		/*try 
		{
			Course course = new Course("123","zyc","zyc");
			am.deleteCourse(course);
			
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testUpdateCourse()
	{
		try 
		{
			Map<String, Object> maps = new hash
			
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}