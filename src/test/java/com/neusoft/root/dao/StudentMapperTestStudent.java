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
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.RawResult;
import com.neusoft.root.domain.Student;


@RunWith(SpringRunner.class)
@SpringBootTest
public class StudentMapperTestStudent 
{
	@Autowired
	private StudentMapper sm;
		
	@Test
	public void testUpdateStudent()
	{
		/*try 
		{
			Student student = new Student("117371", "1", "117371", "jack", "123", "hit");
			sm.updateStudent(student);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryStudent()
	{
		try 
		{
			Student student = new Student();
			student.setStudentId("117371");
			for (Student s : sm.queryStudent(student)) 
			{
				System.out.println(s);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
