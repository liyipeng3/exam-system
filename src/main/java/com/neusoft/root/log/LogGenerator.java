package com.neusoft.root.log;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;

import com.neusoft.root.domain.Log;

public class LogGenerator {
	public static Log logGenerator(){
		Log log = new Log();
		long time=System.currentTimeMillis();
		Date date = new Date(time);
		log.setOpDate(date);
		return log;
	}
}
