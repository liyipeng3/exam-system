package com.neusoft.root.dao;

import java.util.List;
import java.util.Map;

import com.mysql.cj.protocol.Message;
import com.neusoft.root.domain.Check;
import com.neusoft.root.domain.Class1;
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.Courseteacher;
import com.neusoft.root.domain.Coursetudent;
import com.neusoft.root.domain.Forum;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.Log;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Teacher;

public interface TeacherMapper {
	//批阅试卷增删改查
	public void addCheck(Check pCheck);
	public void deleteCheck(Check pCheck);
	public void updateCheck(Map<String, Object> pCheck);
	public List<Check> queryCheck(Check pCheck);
	
	//对班级信息进行查询
	public List<Object> queryClass(Class1 pClass1);
	
	//对课程进行查询
	public List<Object> queryCourse(Course pCourse);
	
	//对老师课程查询
	public List<Object> queryCourseteacher(Courseteacher pCourseteacher);
	
	//对学生课程查询
	public List<Object> queryCoursestudent(Coursetudent pCoursetudent);
	
	//论坛帖子的增加删除查询
	public void addForum(Forum pForum);
	public void deleteForum(Forum pForum);
	public List<Object> queryForum(Forum pForum);
	
	//题库的增删改查
	public void addItem(RawItem item);
	public void deleteItem(RawItem item);
	public void updateItem(Map<String,Object> item);
	public List<RawItem> queryItem(RawItem item);
	
	//log
	public void  addLog(Log plog);
	public List<Object> queryLog(Log plog);
	
	//对消息进行增删查操作
	public void addMessage(Message pMessage);
	public void deleteMessage(Message pMessage);
	public List<Object> queryMessage(Message pMessage);
	
	//试卷的增删改查
	public void addPaper(RawPaper paper);
	public void deletePaper(RawPaper paper);
	public void updatePaper(Map<String,Object> paper);
	public List<RawPaper> queryPaper(RawPaper paper);
	
	//老师
	//改密码
	public void updateTeacherPassword(String id,String oldPassword,String newPassword);
	public List<Object> queryteacher(Teacher pTeacher);
}
