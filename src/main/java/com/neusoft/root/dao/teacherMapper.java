package com.neusoft.root.dao;

import java.util.Map;

import com.neusoft.root.domain.Check;
import com.neusoft.root.domain.Class1;
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.Courseteacher;
import com.neusoft.root.domain.Coursetudent;
import com.neusoft.root.domain.Forum;
import com.neusoft.root.domain.Item;
import com.neusoft.root.domain.Log;

public interface teacherMapper {
	//批阅试卷增删改查
	public void AddCheck(Check pCheck);
	public void DeleteCheck(Check pCheck);
	public void UpdateCheck(Map<String, Object> pCheck);
	public Check QueryCheck(Check pCheck);
	
	//对班级信息进行查询
	public Class1 QueryClass(Class1 pClass1);
	
	//对课程进行查询
	public Course QueryCourse(Course pCourse);
	
	//对老师课程查询
	public Courseteacher QueryCourseteacher(Courseteacher pCourseteacher);
	
	//对学生课程查询
	public Coursetudent QueryCoursestudent(Coursetudent pCoursetudent);
	
	//论坛帖子的增加删除查询
	public void AddForum(Forum pForum);
	public void DeleteForum(Forum pForum);
	public Forum QueryForum(Forum pForum);
	
	//题库的增删改查
	public void AddItem(Item pItem);
	public void DeleteItem(Item pItem);
	public void UpdateItem(Map<String,Object> pItem);
	public Item QueryItem(Item pItem);
	
	//log
	public void  AddLog(Log plog);
	public Log QueryLog(Log plog);
	
}
