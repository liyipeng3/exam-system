package com.neusoft.root.log;

import java.text.SimpleDateFormat;

import org.springframework.stereotype.Component;

import com.neusoft.root.domain.MyLog;

@Component
public class LogGenerator {
	public static MyLog logGenerator(String opId, String opType,String opMsg,String opPage){
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String opDate = df.format(time);
		MyLog myLog = new MyLog(0, opId, opDate, opType, opMsg, opPage);
		return myLog;
	}
}
