package com.neusoft.root.dao;

import static org.junit.Assert.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Student;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMapperTestManagestudent 
{
	@Autowired
	private AdminMapper am;
	
	@Test
	public void testAddManagestudent()
	{
		/*try 
		{
			Managestudent ms = new Managestudent("125", "117372", "123","java","2019-7-15","2019-7-16");
			am.addManagestudent(ms);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testDeleteManagestudent()
	{
		/*try 
		{
			Managestudent ms = new Managestudent("125", "117372", "123","java","2019-7-15","2019-7-16");
			am.deleteManagestudent(ms);
		} catch (Exception e) {
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testUpdateManagestudent()
	{
		/*try 
		{
			Managestudent ms = new Managestudent("125", "117371", "123","java","2019-7-15","2019-7-16");
			am.updateManagestudent(ms);
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
	
	@Test
	public void testQueryManagestudent()
	{
		/*try 
		{
			List<Managestudent> list = am.queryManagestudent(null);
			for (Managestudent managestudent : list) 
			{
				System.out.println(managestudent);
			}
		} 
		catch (Exception e) 
		{
			System.out.println(e);
		}*/
	}
}
