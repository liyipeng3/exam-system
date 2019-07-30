package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
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
	public void deleteMyLog(JSONObject json) {
		// TODO Auto-generated method stub
		MyLog myLog = new MyLog(json.getInteger("logId"), json.getString("opId"), json.getString("opDate"), json.getString("opType"), json.getString("opMsg"), json.getString("opPage"));
		mapper.deleteMyLog(myLog);
	}

	@Override
	public void updateMyLog(JSONObject json) {
		// TODO Auto-generated method stub
		MyLog myLog = new MyLog(json.getInteger("logId"), json.getString("opId"), json.getString("opDate"), json.getString("opType"), json.getString("opMsg"), json.getString("opPage"));
		Map<String, Object> map = new HashMap<>();
		List<String> list = new ArrayList<String>();
		list.add(myLog.getOpId());
		map.put("ids",list);
		map.put("opId",myLog.getOpId());
		map.put("opDate",myLog.getOpDate());
		map.put("opType",myLog.getOpType());
		map.put("opMsg",myLog.getOpMsg());
		map.put("opPage",myLog.getOpPage());
		mapper.updateMyLog(map);
	}

	@Override
	public List<MyLog> queryMyLog(JSONObject json) {
		// TODO Auto-generated method stub
		if(json==null)
		{
			List<MyLog> list = mapper.queryMyLog(null);
			return list;
		}
		MyLog myLog = new MyLog(json.getInteger("logId"), json.getString("opId"), json.getString("opDate"), json.getString("opType"), json.getString("opMsg"), json.getString("opPage"));
		List<MyLog> list = mapper.queryMyLog(myLog);
		return list;
	}
	
	
}
