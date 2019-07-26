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
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.Forum;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Manageteacher;
import com.neusoft.root.domain.Message;
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TeacherMapperTestMessage 
{
	/*@Autowired
	private TeacherMapper tm;
	
	@Test
	public void testAddMessage() 
	{
		try 
		{
			Message message = new Message(1, "2019-7-26", "123", "235", "123", "123", "发送方");
			tm.addMessage(message);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
	
	@Test
	public void testDeleteMessage() 
	{
		try 
		{
			Message message = new Message(2, "2019-7-26", "123", "234", "123", "123", "发送方");
			tm.deleteMessage(message);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}
	
	@Test
	public void testQueryMessage()
	{
		try 
		{
			Message message = new Message();
			message.setMsgRole("发送者");
			message.setTargetId("235");
			for (Message msg : tm.queryMessage(message)) 
			{
				System.out.println(msg);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}
	}*/
}
