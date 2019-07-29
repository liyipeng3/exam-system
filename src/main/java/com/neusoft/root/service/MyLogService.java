package com.neusoft.root.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.neusoft.root.domain.MyLog;

public interface MyLogService {
	
	public void addMyLog(MyLog myLog);
	
	public List<MyLog> queryMyLog();
	
}
