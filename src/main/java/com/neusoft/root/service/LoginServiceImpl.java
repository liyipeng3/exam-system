package com.neusoft.root.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neusoft.root.dao.adminMapper;
import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.Student;




@Service
public class LoginServiceImpl implements LoginService{
	@Autowired
	private adminMapper mapper;

	@Override
	public int querylogin(String id, String password) {
		// TODO Auto-generated method stub
		Admin pAdmin = new Admin(id, null, password);
		Admin pAdmin2 = mapper.QueryAdmin(pAdmin);
		Student pStudent = new Student(id, null, password, null, null, null);
		Student pStudent2 = mapper.QueryStudent(pid)
		Admin pAdmin5 = new Admin(id, null, password);
		Admin pAdmin6 = mapper.QueryAdmin(pAdmin);
		if(pAdmin2==null)
		{
			return 1;
		}
		else if(identify.querystudentIdentify(id, password))
		{
			return 2;
		}
		else if(identify.queryteacherIdentify(id, password))
		{
			return 3;
		}
		else{
			return 0;
		}
		
	}

	
}
