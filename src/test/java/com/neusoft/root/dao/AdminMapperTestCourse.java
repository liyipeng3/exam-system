package com.neusoft.root.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
<<<<<<< HEAD
=======

>>>>>>> origin/zyc
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

<<<<<<< HEAD
import com.neusoft.root.domain.Course;
=======
import com.mysql.cj.x.protobuf.MysqlxDatatypes.Scalar.String;
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;
>>>>>>> origin/zyc

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
<<<<<<< HEAD
		/*try 
		{
			Map<String, Object> maps = new HashMap<String, Object>();
			maps.put("ids", new String[]{"123","124"});
			maps.put("courseName", "zyc1");
			am.updateCourse(maps);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryCourse()
	{
		try 
		{
			List<Course> courses = am.queryCourse(null);
			for (Course course : courses) {
				System.out.println(course);
			}
=======
		try 
		{
			Map<String, Object> maps = new hash
			
>>>>>>> origin/zyc
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}