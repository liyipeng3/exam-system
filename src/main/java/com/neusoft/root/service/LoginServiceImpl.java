package com.neusoft.root.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;
 
@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	AdminMapper mapper;
	@Override
	public int Login(String username, String password) {
		// TODO Auto-generated method stub
		Admin admin = new Admin(username,null, password);
		Student student = new Student(null, username, password, null, null, null);
		Teacher teacher = new Teacher(null, username, password, null, null, null);
		if(mapper.queryAdmin(admin).size()!=0)
		{
			return 1;
		}
		else if(mapper.queryStudent(student).size()!=0)
		{
			return 2;
		}
		else if(mapper.queryTeacher(teacher).size()!=0)
		{
			return 3;
		}
		else 
		{
			return 0;
		}
	}
	
}
