package com.neusoft.root.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.neusoft.root.dao.IdentificationMapper;

@Service
public class LoginServiceImpl implements LoginService{
	@Autowired
	private IdentificationMapper identify;

	@Override
	public int querylogin(String id, String password) {
		// TODO Auto-generated method stub
		if(identify.queryadminIdentify(id, password))
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
