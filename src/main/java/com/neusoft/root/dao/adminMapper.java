package com.neusoft.root.dao;

import com.neusoft.root.domain.Admin;
import com.neusoft.root.domain.Class1;
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.Item;
import com.neusoft.root.domain.Log;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.Manageteacher;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;

public interface adminMapper 
{
	public void AddAdmin(Admin pAdmin);
	public void DeleteAdmin(Admin pAdmin);
	public void UpdateAdmin(Admin pAdmin);
	public Admin QueryAdmin(String pid);
	public void AddStudent(Student pStudent);
	public void DeleteStudent(Student pStudent);
	public void UpdateStudent(Student pStudent);
	public Student QueryStudent(String pid);
	public void AddClass(Class1 pclasss);
	public void DeleteClass(Class1 pclass);
	public void UpdateClass(Class1 pclass);
	public Class1 QueryClass(String pid);
	public void Addteacher(Teacher pteacher);
	public void Deleteteacher(Teacher pteacher);
	public void Updateteacher(Teacher pteacher);
	public Teacher Queryteacher(String pid);
	public void AddCource(Course pcourse);
	public void DeleteteCourse(Course pcourse);
	public void UpdateCourse(Course pcourse);
	public Course Querycourse(String pid);
	public void  AddLog(Log plog);
	public void DeleteLog(Log plog);
	public void UpdateLog(Log plog);
	public Log QueryLog(Log plog);
	public void  AddItem(Item pitem);
	public void DeleteItem(Item pitem);
	public void UpdateItem(Item pitem);
	public Item QueryItem(Item pitem);
	public void  AddManagestudent(Managestudent pmanagestudent);
	public void DeleteManagestudent(Managestudent pmanagestudent);
	public void UpdateManagestudent(Managestudent pmanagestudent);
	public Managestudent QueryManagestudent(Managestudent pmanagestudent);
	public void  AddManageteacher(Manageteacher pManageteacher);
	public void DeleteManageteacher(Manageteacher pManageteacher);
	public void UpdateManageteacher(Manageteacher pManageteacher);
	public Item QueryManageteacher(Manageteacher pManageteacher);
	
}
