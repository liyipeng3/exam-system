package com.neusoft.root.log;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;

import com.neusoft.root.domain.MyLog;

public class LogGenerator {
	public static MyLog logGenerator(){
		MyLog log = new MyLog();
		long time=System.currentTimeMillis();
		Date date = new Date(time);
		log.setOpDate(date);
		return log;
	}
}
