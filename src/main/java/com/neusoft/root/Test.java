
package com.neusoft.root;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.google.gson.Gson;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Student;

public class Test {
	public static void main(String[] args){
		/*Student stu1 = new Student("1", "1", "1", "1", "1", "1");
		Student stu2 = new Student("1", "1", "1", "1", "1", "1");
		Student stu3 = new Student("1", "1", "1", "1", "1", "1");
		Student stu4 = new Student("1", "1", "1", "1", "1", "1");
		Student stu5 = new Student("1", "1", "1", "1", "1", "1");
		List<Student> stul = new ArrayList<>();
		stul.add(stu1);
		stul.add(stu2);
		stul.add(stu3);
		stul.add(stu4);
		stul.add(stu5);
		String json = JSON.toJSONString(stu1);
		System.out.println(json);
		String jsonl = JSON.toJSONString(stul);
		System.out.println(jsonl);
		TestClass tc = new TestClass();
		tc.i = 1;
		tc.stu = new Student("1", "1", "1", "1", "1", "1");
		tc.stul.add(stu1);
		tc.stul.add(stu2);
		tc.stul.add(stu3);
		tc.stul.add(stu4);
		tc.stul.add(stu5);
		String jsont = JSON.toJSONString(tc);
		System.out.println(jsont);
		Gson gson = new Gson();
		String userWithAddressJson = gson.toJson(tc);
		System.out.println(gson.toJson(stu1));
		System.out.println(gson.toJson(stul));
		System.out.println(userWithAddressJson);*/
		/*List<RawPaper> papers = new ArrayList<>();
		Gson gson = new Gson();
		Date date = new Date(9102, 11, 11);
		RawPaper paper1 = new RawPaper("1","test1", "1",date, "语文", 0.1,"choice", "fill", "subjective", "hhh", 100.0, "sss", "sss");
		RawPaper paper2 = new RawPaper("2","test2","2", date, "语文", 0.2, "choice", "fill", "subjective", "hhhh", 100.0, "sss", "sss");
		RawPaper paper3 = new RawPaper("3", "test3","3", date, "语文", 0.3, "choice", "fill", "subjective", "hhhhh", 100.0, "sss", "sss");
		papers.add(paper1);
		papers.add(paper2);
		papers.add(paper3);
		System.out.println(gson.toJson(papers));*/
		long time = System.currentTimeMillis();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		String datestring = df.format(time);
		System.out.println(datestring);
	}
}
