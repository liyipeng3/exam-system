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
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherMapperTestPaper 
{
	@Autowired
	private TeacherMapper tm;
	
	@Test
	public void testAddRawPaper() 
	{
		/*try 
		{
			RawPaper rp = new RawPaper(1, "paperName", "235", "2019-8-7", 
					"java", 2.3, "single", "multi", "fill", "subjective", 
					2.3, "保密", "my");
			tm.addRawPaper(rp);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteRawPaper() 
	{
		/*try 
		{
			RawPaper rp = new RawPaper();
			rp.setPaperId(3);
			tm.deleteRawPaper(rp);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testUpdateRawPaper() 
	{
		/*try 
		{
			RawPaper rp = new RawPaper();
			rp.setPaperId(1);
			rp.setPaperSecrecy("公开");
			tm.updateRawPaper(rp);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQuerytestUpdateRawPaper()
	{
		try 
		{
			List<RawPaper> list = tm.queryRawPaper(null);
			for (RawPaper paper : list) 
			{
				System.out.println(paper);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
}
