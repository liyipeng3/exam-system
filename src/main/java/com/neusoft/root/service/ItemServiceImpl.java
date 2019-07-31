package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.ParsedItem;
import com.neusoft.root.domain.RawItem;

@Service
public class ItemServiceImpl implements ItemService{

	@Autowired
	private TeacherMapper mapper;
	@Override
	public List<RawItem> queryRawItem(String subjects) {
		// TODO Auto-generated method stub
		List<RawItem> list = new ArrayList<>();
		if(subjects==null||subjects=="")
		{
			list =mapper.queryRawItem(null);
			return list;
		}
		else
		{
			RawItem rawItem = new RawItem((Integer)0, "", "", subjects, "", (Double)0.0, "", "", "", "", (Double)0.0, "");
			list =mapper.queryRawItem(rawItem);
			return list;
		}
	}
	@Override
	public void addRawItem(JSONObject json) {
		// TODO Auto-generated method stub
		int i,j;
		Double diffcult =0.0 ;
		String option = "";
		j= json.getInteger("option_length");
		System.out.println(json);
		if(json.getString("difficult").equals("简单"))
		{
			diffcult = 1.0;
		}
		else if(json.getString("difficult").equals("普通"))
		{
			diffcult =3.0;
		}
		else if(json.getString("difficult").equals("困难"))
		{
			diffcult = 5.0;
		}
		System.out.println("@@@");
		for(i=1;i<=j;i++)
		{
			option = option+json.getString("key"+i+"Editor")+"###";
		}

		option = option.substring(0, option.length()-3);
			System.out.println("!!!");
		if(json.getString("itemType").equals("单选题"))
		{
			
			RawItem item = new RawItem((Integer)0,json.getString("createrId"),json.getString("itemDate"), json.getString("subject"), json.getString("itemType"), diffcult, json.getString("questionEditor"), option, json.getString(json.getString("answer")), "", 5.0, json.getString("analysisEditor"));
			System.out.println(item.toString());
			mapper.addRawItem(item);
		}
		else if(json.getString("itemType").equals("多选题")){
			int k = 1;
			String answer ="";
			while(json.getString("answer"+k) != null){
				answer = answer+json.getString(json.getString("answer"+k))+"###";
				k++;
			}
			answer = answer.substring(0, answer.length()-3);
			RawItem item = new RawItem((Integer)0,json.getString("createrId"),json.getString("itemDate"), json.getString("subject"), json.getString("itemType"), diffcult, json.getString("questionEditor"), option, answer, "", 6.0, json.getString("analysisEditor"));
			mapper.addRawItem(item);
		}
		else if(json.getString("itemType").equals("填空题"))
		{
			int k=1;
			String answer ="";
			while(json.getString("answer"+k) != null){
				System.out.println(json.getString("answer"+k));
				answer = answer+json.getString("answer"+k)+"###";
				k++;
			}
			answer = answer.substring(0, answer.length()-3);
			RawItem item = new RawItem((Integer)0,json.getString("createrId"),json.getString("itemDate"), json.getString("subject"), json.getString("itemType"), diffcult, json.getString("questionEditor"), "", answer, "", 7.0, json.getString("analysisEditor"));
			mapper.addRawItem(item);
			
		}
		else if(json.getString("itemType").equals("问答题"))
		{
			RawItem item = new RawItem((Integer)0,json.getString("createrId"),json.getString("itemDate"), json.getString("subject"), json.getString("itemType"), diffcult, json.getString("questionEditor"), "", json.getString("answer"), "", 10.0, json.getString("analysisEditor"));
			mapper.addRawItem(item);
		}
		else {
			System.out.println("无效题目类型！！！");
			System.out.println(json);
			System.exit(0);
		}
		
	}
	@Override
	public void deleteRawItem(Integer id) {
		// TODO Auto-generated method stub
		RawItem item = new RawItem(id, "", "", "", "", (Double)0.0, "", "", "", "", (Double)0.0, "");
		mapper.deleteRawItem(item);
	}
	@Override
	public void updateRawItem(JSONObject json) {
		// TODO Auto-generated method stub
		int i,j;
		Double diffcult =0.0 ;
		String option ="";
		j= json.getInteger("option_length");
		if(json.getString("difficult").equals("简单"))
		{
			diffcult = 1.0;
		}
		else if(json.getString("difficult").equals("普通"))
		{
			diffcult =3.0;
		}
		else if(json.getString("difficult").equals("困难"))
		{
			diffcult = 5.0;
		}
		for(i=1;i<=j;i++)
		{
			option = option+json.getString("key"+i+"Editor")+"###";
		}
			option = option.substring(0, option.length()-3);
		if(json.getString("itemType").equals("单选题"))
		{
			
			RawItem item = new RawItem(json.getInteger("itemId"),json.getString("createrId"),json.getString("itemDate"), json.getString("subject"), json.getString("itemType"), diffcult, json.getString("questionEditor"), option, json.getString(json.getString("answer")), "", 5.0, json.getString("analysisEditor"));
			mapper.updateRawItem(item);
		}
		else if(json.getString("itemType").equals("多选题")){
			int k = 1;
			String answer ="";
			while(json.getString("answer"+k) != null){
				answer = answer+json.getString(json.getString("answer"+k))+"###";
				k++;
			}
			answer = answer.substring(0, answer.length()-3);
			RawItem item = new RawItem(json.getInteger("itemId"),json.getString("createrId"),json.getString("itemDate"), json.getString("subject"), json.getString("itemType"), diffcult, json.getString("questionEditor"), option, answer, "", 6.0, json.getString("analysisEditor"));
			mapper.updateRawItem(item);
		}
		else if(json.getString("itemType").equals("填空题"))
		{
			int k=1;
			String answer ="";
			while(json.getString("answer"+k) != null){
				answer = answer+json.getString(json.getString("answer"+k))+"###";
				k++;
			}
			answer = answer.substring(0, answer.length()-3);
			RawItem item = new RawItem(json.getInteger("itemId"),json.getString("createrId"),json.getString("itemDate"), json.getString("subject"), json.getString("itemType"), diffcult, json.getString("questionEditor"), "", answer, "", 7.0, json.getString("analysisEditor"));
			mapper.updateRawItem(item);
			
		}
		else if(json.getString("itemType").equals("问答题"))
		{
			RawItem item = new RawItem(json.getInteger("itemId"),json.getString("createrId"),json.getString("itemDate"), json.getString("subject"), json.getString("itemType"), diffcult, json.getString("questionEditor"), "", json.getString("answer"), "", 10.0, json.getString("analysisEditor"));
			mapper.updateRawItem(item);
		}
		else {
			System.out.println("无效题目类型！！！");
			System.out.println(json);
			System.exit(0);
		}
		
	}
	@Override
	public List<ParsedItem> queryParsedItem(String subjects) {
		// TODO Auto-generated method stub
		List<RawItem> list = new ArrayList<>();
		List<ParsedItem> list2 = new ArrayList<>();
		RawItem rawItem = new RawItem((Integer)0, "", "", subjects, "", (Double)0.0, "", "", "", "", (Double)0.0, "");
		list =mapper.queryRawItem(rawItem);
		for(RawItem item:list)
		{
			List<String> list3 = new ArrayList<>();
			String [] line = null;
			line = item.getItemOption().split("###");
			for(int i=0;i<line.length;i++)
			{
				list3.add(line[i]);
			}
			String [] line1 = null;
			line1 = item.getItemAnswer().split("###");
			List<String> answer = new ArrayList<>();
			for(int j=0;j<line1.length;j++)
			{
				answer.add(line1[j]);
			}
			list2.add(new ParsedItem(item.getItemId(),item.getCreaterId(), item.getItemDate(), item.getItemCoursetype(), item.getItemType(), item.getItemIndex(),item.getItemQuestion(), list3, answer, item.getItemPicture(), item.getItemScore(), item.getItemParse()));
		}
		return list2;
	}
	@Override
	public List<RawItem> queryRawItem(Integer ID) {
		// TODO Auto-generated method stub
		RawItem item = new RawItem(ID, "", "", "", "", 0.0, "", "", "", "", 0.0, "");
		List<RawItem> items = mapper.queryRawItem(item);
		return items;
	}
	@Override
	public List<ParsedItem> queryParsedItem(Integer ID) {
		// TODO Auto-generated method stub
	//	System.out.println(ID+"!!!");
		RawItem item = new RawItem();
		item.setItemId(ID);
		try {
	//		System.out.println("before    "+item);
			List<RawItem> items = mapper.queryRawItem(item);
			//System.out.println("@@@");
	//	System.out.println("item   "+items.toString());
			List<ParsedItem> items2 = new ArrayList<>();
		//	System.out.println("!!!");
			for(RawItem xItem:items)
			{
				List<String> list3 = new ArrayList<>();
				String [] line = null;
				line = xItem.getItemOption().split("###");
				for(int i=0;i<line.length;i++)
				{
					list3.add(line[i]);
				}
				String [] line1 = null;
				line1 = xItem.getItemAnswer().split("###");
				List<String> answer = new ArrayList<>();
				for(int j=0;j<line1.length;j++)
				{
					answer.add(line1[j]);
				}
				items2.add(new ParsedItem(xItem.getItemId(),xItem.getCreaterId(), xItem.getItemDate(), xItem.getItemCoursetype(), xItem.getItemType(), xItem.getItemIndex(),xItem.getItemQuestion(), list3, answer, xItem.getItemPicture(), xItem.getItemScore(), xItem.getItemParse()));
		//System.out.println(xItem.toString());
			}
			//System.out.println("item 返回"+items2);
			return items2;
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
	

	
	
}
