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
	AdminMapper adminMapper;

	@Override
	public int querylogin(String id, String password) {
		// TODO Auto-generated method stub
		Admin admin = new Admin(id, null, password);
		Student student = new Student(id, null, password, null, null, null);
		Teacher teacher = new Teacher(id, null, password, null, null);
		if(adminMapper.queryAdmin(admin)==null)
		{
			return 1; 
		}
		else if(adminMapper.queryStudent(student)==null)
		{
			return 2; 
		}
		else if(adminMapper.queryteacher(teacher)==null)
		{
			return 3;
		}
		else {
			return 0;
		}
	}
	
	
}
