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
import com.neusoft.root.domain.Result;
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestReuslt 
{
	@Autowired
	private AdminMapper am;
	
	@Test
	public void testQueryResult()
	{
		try 
		{
			Result result1 = new Result("117371", 1, "1", "1", null, null,"2019-9-9");
			List<Result> results = am.queryResult(result1);
			for (Result result : results) 
			{
				System.out.println(result);
			}
		} catch (Exception e) {
			System.out.println(e);
		}
	}
}
