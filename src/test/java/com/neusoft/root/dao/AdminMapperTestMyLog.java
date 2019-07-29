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
		/*try 
		{
			MyLog log = new MyLog(1, "113", "2019-7-6", "123", "123", "123");
			am.addMyLog(log);

		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteMylog()
	{
		/*try 
			Date date = new Date(2019, 7, 25);
			MyLog log = new MyLog(1, "111", "2017-7-4", "123", "123", "123");
			am.deleteMyLog(log);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testUpdateMylog()
	{
		/*try 
		{
			Map<String, Object> maps = new HashMap<>();
			maps.put("ids", new String[]{"2","3","4"});
			maps.put("opId", "zyc");
			am.updateMyLog(maps);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryMylog()
	
	{
		try 
		{
			List<MyLog> logs = am.queryMyLog(null);
			for (MyLog myLog : logs) 
			{
				System.out.println(myLog);
			}
		} 
		catch (Exception e) {
			// TODO: handle exception
		}
	}
}
