package com.neusoft.root.dao;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

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
		/*Admin admin = new Admin("123","","");
		am.deleteAdmin(admin);*/
	}
	
	@Test
	public void testUpdateAdmin()
	{
		Map<String, Object> admins = new HashMap<>();
		admins.put("ids", new String[]{"123","1234"});
		admins.put("adminName", "zyc2");
		am.updateAdmin(admins);
	}
	
	@Test
	public void testQueryAdmin()
	{
		/*List<Admin> list = am.queryAdmin(null);
		for (Admin admin : list) 
		{
			System.out.println(admin);
		}*/
	}
	
	
}
