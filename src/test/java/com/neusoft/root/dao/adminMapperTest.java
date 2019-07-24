package com.neusoft.root.dao;

import static org.junit.Assert.*;

import javax.swing.Spring;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.aop.ProxyMethodInvocation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.Admin;

@RunWith(SpringRunner.class)
@SpringBootTest
public class adminMapperTest 
{
	@Autowired
	private adminMapper am;
	
	@Test
	public void testAddAdmin() 
	{
		am.AddAdmin(new Admin("123", "zyc", "123"));
	}
}
