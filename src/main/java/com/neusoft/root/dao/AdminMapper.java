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
	public void addAdmin(Admin admin);
	public void deleteAdmin(Admin admin);
	public void updateAdmin(Map<String ,Object> admin);
	public List<Admin> queryAdmin(Admin admin);
	
	//学生
	public void addStudent(Student student);
	public void deleteStudent(Student student);
	public void updateStudent(Map<String ,Object> student);
	public List<Student> queryStudent(Student student);
	
	//班级
	public void addClass(Class1 class1);
	public void deleteClass(Class1 class1);
	public void updateClass(Map<String ,Object> class1);
	public List<Class1> queryClass(Class1 class1);
	
	//老师
	public void addteacher(Teacher teacher);
	public void deleteteacher(Teacher teacher);
	public void updateteacher(Map<String ,Object> teacher);
	public List<Teacher> queryteacher(Teacher teacher);
	
	//课程
	public void addCource(Course course);
	public void deleteteCourse(Course course);
	public void updateCourse(Map<String ,Object> course);
	public List<Course> querycourse(Course course);
	
	//记录
	public void  addLog(Log log);
	public void deleteLog(Log log);
	public void updateLog(Map<String ,Object> log);
	public List<Log> queryLog(Log log);
	
	
	//学生安排考试表的增删改查
	public void  addManagestudent(Managestudent managestudent);
	public void deleteManagestudent(Managestudent managestudent);
	public void updateManagestudent(Map<String ,Object> managestudent);
	public List<Managestudent> queryManagestudent(Managestudent managestudent);
	
	//老师安排考试表的增删改查
	public void  addManageteacher(Manageteacher manageteacher);
	public void deleteManageteacher(Manageteacher manageteacher);
	public void updateManageteacher(Map<String ,Object> manageteacher);
	public List<Manageteacher> queryManageteacher(Manageteacher manageteacher);
	
	//对消息进行增删查操作
	public void addMessage(Message message);
	public void deleteMessage(Message message);
	public List<Message> queryMessage(Message message);
	
	//学生答题结果
	public void addResult(Result result);
	public List<Result> queryResult(Result result);
	
	//论坛帖子的增加删除查询
	public void addForum(Forum forum);
	public void deleteForum(Forum forum);
	public List<Forum> queryForum(Forum forum);
	
	//老师批卷结果的查询
	public List<Check> queryCheck(Check check);
	
}
