package com.neusoft.root.dao;

import static org.junit.Assert.*;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.Admin;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestAdmin 
{
	@Autowired
	private AdminMapper am;
	
	@Test
	public void testAddAdmin() 
	{
		/*try 
		{
			System.out.println(1);
			am.addAdmin(new Admin("1234", "zyc", "123"));
			System.out.println(1);
		} catch (Exception e) {
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteAdmin()
	{
		Admin admin = new Admin("123","","");
	}
	
}
