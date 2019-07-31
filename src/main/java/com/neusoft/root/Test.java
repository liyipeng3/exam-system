
package com.neusoft.root;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.google.gson.Gson;
import com.neusoft.root.domain.ParsedItem;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Student;
import com.neusoft.root.service.PaperServiceImpl;

public class Test {
	public static void main(String[] args){
		List<String> options = new ArrayList<>();
		options.add("option1");
		options.add("option2");
		List<String> answers = new ArrayList<>();
		answers.add("answer1");
		answers.add("answer2");
		ParsedItem item = new ParsedItem(1, "createrId", "itemDate", "itemCoursetype", "itemType", 0.1, "itemQuestion", options, answers, "itemPicture", 0.1, "itemParse");
		List<ParsedItem> items = new ArrayList<>();
		items.add(item);
		items.add(item);
		List<List<ParsedItem>> ITEMS = new ArrayList<>();
		ITEMS.add(items);
		ITEMS.add(items);
		List<String> itemsTitle = new ArrayList<>();
		itemsTitle.add("第一大题");
		itemsTitle.add("第二大题");
		List<String> itemsType = new ArrayList<>();
		itemsType.add("单选题");
		itemsType.add("多选题");
		ParsedPaper paper = new ParsedPaper(1, "paperName", "createrId", "createDate", "paperType", 0.1, ITEMS, itemsTitle, itemsType, 0.1, "paperSecrecy", "paperRemark");
		Gson gson = new Gson();
		System.out.println(gson.toJson(paper));
	}
}
