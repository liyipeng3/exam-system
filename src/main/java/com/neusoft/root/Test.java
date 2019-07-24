package com.neusoft.root;

import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.neusoft.root.domain.Student;

public class Test {
	public static void main(String[] args){
		Student stu1 = new Student("1", "1", "1", "1", "1", "1");
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
	}
}
