package com.neusoft.root.dao;

import org.apache.ibatis.annotations.Mapper;

import com.mysql.cj.protocol.Message;
import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.Class1;
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.Item;
import com.neusoft.root.domain.Log;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Manageteacher;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;

@Mapper
public interface adminMapper 
{
	//增加管理员
	public void AddAdmin(Admin pAdmin);
	//删除管理员
	public void DeleteAdmin(Admin pAdmin);
	//更新管理员
	public void UpdateAdmin(Admin pAdmin);
	//查询管理员
	public Admin QueryAdmin(Admin pAdmin);
	//增加学生
	public void AddStudent(Student pStudent);
	//删除学生
	public void DeleteStudent(Student pStudent);
	//更新学生
	public void UpdateStudent(Student pStudent);
	//查询学生
	public Student QueryStudent(String pid);
	//增加班级
	public void AddClass(Class1 pclasss);
	//删除班级
	public void DeleteClass(Class1 pclass);
	//更新班级
	public void UpdateClass(Class1 pclass);
	//查询班级
	public Class1 QueryClass(String pid);
	//增加老师
	public void Addteacher(Teacher pteacher);
	//删除老师
	public void Deleteteacher(Teacher pteacher);
	//更新老师
	public void Updateteacher(Teacher pteacher);
	//查询老师
	public Teacher Queryteacher(String pid);
	//增加课程
	public void AddCource(Course pcourse);
	//删除课程
	public void DeleteteCourse(Course pcourse);
	//更新课程
	public void UpdateCourse(Course pcourse);
	//查询课程
	public Course Querycourse(String pid);
	//增加记录
	public void  AddLog(Log plog);
	//删除记录
	public void DeleteLog(Log plog);
	//更新记录
	public void UpdateLog(Log plog);
	//查询log
	public Log QueryLog(Log plog);
	
	
	//学生安排考试表的增删改查
	public void  AddManagestudent(Managestudent pmanagestudent);
	public void DeleteManagestudent(Managestudent pmanagestudent);
	public void UpdateManagestudent(Managestudent pmanagestudent);
	public Managestudent QueryManagestudent(Managestudent pmanagestudent);
	
	//老师安排考试表的增删改查
	public void  AddManageteacher(Manageteacher pManageteacher);
	public void DeleteManageteacher(Manageteacher pManageteacher);
	public void UpdateManageteacher(Manageteacher pManageteacher);
	public Item QueryManageteacher(Manageteacher pManageteacher);
	
	//对消息进行增删查操作
	public void AddMessage(Message pMessage);
	public void DeleteMessage(Message pMessage);
	public Message QueryMessage(Message pMessage);
}
