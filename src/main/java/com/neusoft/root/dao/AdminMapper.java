package com.neusoft.root.dao;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.mysql.cj.protocol.Message;
import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.Check;
import com.neusoft.root.domain.Class1;
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.Forum;
import com.neusoft.root.domain.Item;
import com.neusoft.root.domain.Log;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Manageteacher;
import com.neusoft.root.domain.Result;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;

@Mapper
public interface AdminMapper 
{
	//管理员
	public void addAdmin(Admin pAdmin);
	public void deleteAdmin(Admin pAdmin);
	public void updateAdmin(Map<String ,Object> pAdmin);
	public List<Object> queryAdmin(Admin pAdmin);
	
	//学生
	public void addStudent(Student pStudent);
	public void deleteStudent(Student pStudent);
	public void updateStudent(Map<String ,Object> pStudent);
	public List<Object> queryStudent(Student pStudent);
	
	//教室
	public void addClass(Class1 pclasss);
	public void deleteClass(Class1 pclass);
	public void updateClass(Map<String ,Object> pclass);
	public List<Object> queryClass(Class1 pClass1);
	
//老师
	public void addTeacher(Teacher teacher);
	public void deleteTeacher(Teacher teacher);
	public void updateTeacher(Map<String ,Object> teacher);
	public List<Teacher> queryTeacher(Teacher teacher);
	
	//课程
	public void addCource(Course course);
	public void deleteteCourse(Course course);
	public void updateCourse(Map<String ,Object> course);
	public List<Course> queryCourse(Course course);
	
	//记录
	public void addLog(Log log);
	public void deleteLog(Log log);
	public void updateLog(Map<String ,Object> log);
	public List<Log> queryLog(Log log);
	
	
	//学生安排考试表的增删改查
	public void  addManagestudent(Managestudent managestudent);
	public void deleteManagestudent(Managestudent managestudent);
	public void updateManagestudent(Managestudent managestudent);
	public List<Managestudent> queryManagestudent(Managestudent managestudent);
	
	//老师安排考试表的增删改查
	public void addManageteacher(Manageteacher manageteacher);
	public void deleteManageteacher(Manageteacher manageteacher);
	public void updateManageteacher(Manageteacher manageteacher);
	public List<Manageteacher> queryManageteacher(Manageteacher manageteacher);

	
	//对消息进行增删查操作
	public void addMessage(Message pMessage);
	public void deleteMessage(Message pMessage);
	public List<Object> queryMessage(Message pMessage);
	
	//学生答题结果
	public void addResult(Result pResult);
	public List<Object> queryResult(Result pResult);
	
	//论坛帖子的增加删除查询
	public void addForum(Forum pForum);
	public void deleteForum(Forum pForum);
	public List<Object> queryForum(Forum pForum);
	
	//老师批卷结果的查询

	public List<Check> queryCheck(Check check);

}
