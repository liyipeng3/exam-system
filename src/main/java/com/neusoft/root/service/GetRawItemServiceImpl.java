package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.RawItem;

@Service
public class GetRawItemServiceImpl implements GetRawItemService{

	@Autowired
	TeacherMapper mapper;
	@Override
	public List<RawItem> getRawItem(String subjects) {
		// TODO Auto-generated method stub
		List<RawItem> list = new ArrayList<>();
		RawItem rawItem = new RawItem(null, subjects, null, null, null, null, null, null, null);
		list =mapper.queryRawItem(rawItem);
		return list;
	}

	
	
}
