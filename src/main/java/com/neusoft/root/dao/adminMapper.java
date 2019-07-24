package com.neusoft.root.dao;

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
public interface adminMapper 
{
	//管理员
	public void AddAdmin(Admin pAdmin);
	public void DeleteAdmin(Admin pAdmin);
	public void UpdateAdmin(Map<String ,Object> pAdmin);
	public Admin QueryAdmin(Admin pAdmin);
	
	//学生
	public void AddStudent(Student pStudent);
	public void DeleteStudent(Student pStudent);
	public void UpdateStudent(Map<String ,Object> pStudent);
	public Student QueryStudent(Student pStudent);
	
	//班级
	public void AddClass(Class1 pclasss);
	public void DeleteClass(Class1 pclass);
	public void UpdateClass(Map<String ,Object> pclass);
	public Class1 QueryClass(Class1 pClass1);
	
	//老师
	public void Addteacher(Teacher pteacher);
	public void Deleteteacher(Teacher pteacher);
	public void Updateteacher(Map<String ,Object> pteacher);
	public Teacher Queryteacher(Teacher pTeacher);
	
	//课程
	public void AddCource(Course pcourse);
	public void DeleteteCourse(Course pcourse);
	public void UpdateCourse(Map<String ,Object> pcourse);
	public Course Querycourse(Course pCourse);
	
	//记录
	public void  AddLog(Log plog);
	public void DeleteLog(Log plog);
	public void UpdateLog(Map<String ,Object> plog);
	public Log QueryLog(Log plog);
	
	
	//学生安排考试表的增删改查
	public void  AddManagestudent(Managestudent pmanagestudent);
	public void DeleteManagestudent(Managestudent pmanagestudent);
	public void UpdateManagestudent(Map<String ,Object> pmanagestudent);
	public Managestudent QueryManagestudent(Managestudent pmanagestudent);
	
	//老师安排考试表的增删改查
	public void  AddManageteacher(Manageteacher pManageteacher);
	public void DeleteManageteacher(Manageteacher pManageteacher);
	public void UpdateManageteacher(Map<String ,Object> pManageteacher);
	public Item QueryManageteacher(Manageteacher pManageteacher);
	
	//对消息进行增删查操作
	public void AddMessage(Message pMessage);
	public void DeleteMessage(Message pMessage);
	public Message QueryMessage(Message pMessage);
	
	//学生答题结果
	public void AddResult(Result pResult);
	public Result QueryResult(Result pResult);
	
	//论坛帖子的增加删除查询
	public void AddForum(Forum pForum);
	public void DeleteForum(Forum pForum);
	public Forum QueryForum(Forum pForum);
	
	//老师批卷结果的查询
	public Check QueryCheck(Check pCheck);
	
}
