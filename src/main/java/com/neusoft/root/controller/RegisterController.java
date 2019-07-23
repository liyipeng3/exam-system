package com.neusoft.root.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/register")
public class RegisterController {
	@RequestMapping(value="/checkAccount", method=RequestMethod.POST)
	@ResponseBody
	public String checkAccount(String account) {
		if(account.equals("admin")) {
			return "{'success':'false'}";
		}
		else{
			return "{'success':'true'}";
		}
	}
}
