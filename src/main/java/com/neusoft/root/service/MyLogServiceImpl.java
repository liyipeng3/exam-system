package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.domain.MyLog;

@Service
public class MyLogServiceImpl implements MyLogService{

	@Autowired
	AdminMapper mapper;
	@Override
	public void addMyLog(MyLog myLog) {
		// TODO Auto-generated method stub
		mapper.addMyLog(myLog);
	}
	
	@Override
	public List<MyLog> queryMyLog() {
		// TODO Auto-generated method stub
		List<MyLog> myLog = new ArrayList<>();
		myLog = mapper.queryMyLog(null);
		return myLog;
	}
	
}
