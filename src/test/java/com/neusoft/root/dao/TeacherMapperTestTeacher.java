package com.neusoft.root.dao;

import static org.junit.Assert.*;
import static org.mockito.Mockito.RETURNS_DEEP_STUBS;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import org.apache.ibatis.javassist.expr.NewArray;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mysql.cj.xdevapi.Result;
import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.Forum;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Manageteacher;
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.RawResult;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherMapperTestTeacher 
{
	@Autowired
	private TeacherMapper tm;
		
	@Test
	public void testQueryStudent()
	{
		/*try 
		{
			RawResult rawResult = new RawResult();
			rawResult.setChecked("no");
			rawResult.setPaperId(1);
			for (RawResult rr : tm.queryResult(rawResult))
			{
				System.out.println(rr);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
		/*//
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
		String date = df.format(new Date());// new Date()为获取当前系统时间
		System.out.println(date);*/
		/*时间戳*/
		//System.out.println(System.currentTimeMillis());
		
		for (Integer i : getRandom(10, 35)) 
		{
			System.out.println(i);
		}
	}
	
	
	public static Set<Integer> getRandom(Integer wantLength,Integer itemLength) 
	{
		Set<Integer> numberSet = new HashSet<>();
		if (wantLength>=itemLength) 
		{
			for(int i=0;i<itemLength;i++)
			{
				numberSet.add(i);
			}
			return numberSet;
		}
		else
		{
			Random random = new Random(System.currentTimeMillis());
			while(numberSet.size()<wantLength)
			{
				numberSet.add(random.nextInt(itemLength));
			}
			return numberSet;
		}
	}
	
}
