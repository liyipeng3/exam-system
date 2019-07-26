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
import com.neusoft.root.domain.Message;
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestMessage 
{
	@Autowired
	private AdminMapper am;
	
	@Test
	public void testAddMessage()
	{
		/*try 
		{
			Message message = new Message(1, "2019-7-25", "123", "123", "申诉", "i get you", "发送者");
			am.addMessage(message);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteMessage()
	{
		/*try 
		{
			Message message = new Message(1, "2019-7-25", "123", "123", "申诉", "i get you", "发送者");
			am.deleteMessage(message);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryMessage()
	{
		/*
		try 
		{
			Message message = new Message(1, "2019-7-25", "", "", "申诉", "i get you", "");
			List<Message> messages = am.queryMessage(message);
			for (Message msg : messages) 
			{
				System.out.println(msg);
			}
		} catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
}
