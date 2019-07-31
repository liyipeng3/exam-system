package com.neusoft.root.service;

import static org.assertj.core.api.Assertions.linesOf;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.javassist.expr.NewArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.domain.ParsedItem;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.RawPaper;

@Service
public class MyServiceImp implements MyService
{

	@Autowired
	TeacherMapper mapper;

	@Override
	public ParsedPaper queryParsedPaper(Integer paperId) 
	{
		RawPaper rp = new RawPaper();
		rp.setPaperId(paperId);
		
		//获取原生试卷
		RawPaper targetRawPaper = mapper.queryRawPaper(rp).get(0);
		
		//创建一份解析后的试卷，并且基本信息初始化
		ParsedPaper parsedPaper = new ParsedPaper(); 
		parsedPaper.setPaperId(targetRawPaper.getPaperId());
		parsedPaper.setPaperName(targetRawPaper.getPaperName());
		parsedPaper.setCreaterId(targetRawPaper.getCreaterId());
		parsedPaper.setCreateDate(targetRawPaper.getCreateDate());
		parsedPaper.setPaperType(targetRawPaper.getPaperType());
		parsedPaper.setPaperIndex(targetRawPaper.getPaperIndex());
		parsedPaper.setPaperScore(targetRawPaper.getPaperScore());
		parsedPaper.setPaperSecrecy(targetRawPaper.getPaperSecrecy());
		parsedPaper.setPaperRemark(targetRawPaper.getPaperRemark());
		
		//解析单选题
		parse(targetRawPaper.getSinglechoiceQuestion(), parsedPaper);
		
		//解析多选题
		parse(targetRawPaper.getMultichoiceQuestion(), parsedPaper);

		//解析填空题
		parse(targetRawPaper.getFillQuestion(), parsedPaper);

		//解析主观题
		parse(targetRawPaper.getSubjectiveQuestion(), parsedPaper);

		return parsedPaper;
	}

	private void createList1(Integer lenght, List<String> list) 
	{
		if (list.size()<lenght+1) 
		{
			for (int i = list.size(); i < lenght+1; i++) 
			{
				list.add("");
			}
		}
	}
	
	private void createList2(Integer lenght,List<List<ParsedItem>> list) 
	{
		if (list.size()<lenght+1) 
		{
			for (int i = list.size(); i < lenght+1; i++) 
			{
				list.add(new ArrayList<ParsedItem>());
			}
		}
	}
	
	
	private void parse(String question, ParsedPaper parsedPaper)
	{
		String[] line = question.split("\\#\\#\\#");
		String[] detail;
		Integer itemId;
		Double itemScore;
		String itemTitle;
		Integer titleNum;
		ParsedItem parsedItem;
		RawItem searchRawItem, targetRawItem;
 		for (int i = 0; i < line.length; i++) 
		{
			detail = line[i].split("\\?\\?\\?");
			itemId = Integer.valueOf(detail[0]);
			itemScore = Double.valueOf(detail[1]);
			itemTitle = detail[2]; //
			titleNum = Integer.valueOf(detail[3]); //
			searchRawItem = new RawItem();
			searchRawItem.setItemId(itemId);
			targetRawItem = mapper.queryRawItem(searchRawItem).get(0);
			//解析rawItem
			parsedItem = parseRawItem(targetRawItem);
			parsedItem.setItemScore(itemScore);
			
			//创建表格
			createList1(titleNum, parsedPaper.getItemsType());
			createList1(titleNum, parsedPaper.getItemsTitle());
			createList2(titleNum, parsedPaper.getItems());
			
			parsedPaper.getItems().get(titleNum).add(parsedItem);
			parsedPaper.getItemsTitle().set(titleNum, itemTitle);
			parsedPaper.getItemsType().set(titleNum, parsedItem.getItemType());
		}
	}
	
	private ParsedItem parseRawItem(RawItem rawItem)
	{
		ParsedItem parsedItem = new ParsedItem();
		parsedItem.setItemId(rawItem.getItemId());
		parsedItem.setCreaterId(rawItem.getCreaterId());
		parsedItem.setItemDate(rawItem.getItemDate());
		parsedItem.setItemCoursetype(rawItem.getItemCoursetype());
		parsedItem.setItemType(rawItem.getItemType());
		parsedItem.setItemIndex(rawItem.getItemIndex());
		parsedItem.setItemQuestion(rawItem.getItemQuestion());
		parsedItem.setItemOption(Arrays.asList(rawItem.getItemOption().split("\\#\\#\\#")));
		parsedItem.setItemAnswer(Arrays.asList(rawItem.getItemAnswer().split("\\#\\#\\#")));
		parsedItem.setItemPicture(rawItem.getItemPicture());
		parsedItem.setItemParse(rawItem.getItemParse());
		return parsedItem;
	}

}
