package com.neusoft.root.controller;

import java.util.Set;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.neusoft.root.TestClass1;
import com.neusoft.root.domain.Item;

@Controller
@RequestMapping("/exam")
public class PaperGeneratorController {
	@RequestMapping(value="/add_paper", method=RequestMethod.GET)
	@ResponseBody
	public Set<Item> paperSettings(String paper_name, String paper_type, String method) {
		return null;
	}
	@RequestMapping(value="get_paper_class", method=RequestMethod.GET)
	@ResponseBody
	public TestClass1 getPaper(){
		TestClass1 tc = new TestClass1();
		tc.add("语文");
		tc.add("数学");
		return tc;
	}
}
