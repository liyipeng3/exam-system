package com.neusoft.root.dao;

import com.neusoft.root.domain.admin;
import com.neusoft.root.domain.class1;
import com.neusoft.root.domain.course;
import com.neusoft.root.domain.item;
import com.neusoft.root.domain.log;
import com.neusoft.root.domain.managestudent;
import com.neusoft.root.domain.manageteacher;
import com.neusoft.root.domain.student;
import com.neusoft.root.domain.teacher;

public interface adminMapper 
{
	public void AddAdmin(admin pAdmin);
	public void DeleteAdmin(admin pAdmin);
	public void UpdateAdmin(admin pAdmin);
	public admin QueryAdmin(String pid);
	public void AddStudent(student pStudent);
	public void DeleteStudent(student pStudent);
	public void UpdateStudent(student pStudent);
	public student QueryStudent(String pid);
	public void AddClass(class1 pclasss);
	public void DeleteClass(class1 pclass);
	public void UpdateClass(class1 pclass);
	public class1 QueryClass(String pid);
	public void Addteacher(teacher pteacher);
	public void Deleteteacher(teacher pteacher);
	public void Updateteacher(teacher pteacher);
	public teacher Queryteacher(String pid);
	public void AddCource(course pcourse);
	public void DeleteteCourse(course pcourse);
	public void UpdateCourse(course pcourse);
	public course Querycourse(String pid);
	public void  AddLog(log plog);
	public void DeleteLog(log plog);
	public void UpdateLog(log plog);
	public log QueryLog(log plog);
	public void  AddItem(item pitem);
	public void DeleteItem(item pitem);
	public void UpdateItem(item pitem);
	public item QueryItem(item pitem);
	public void  AddManagestudent(managestudent pmanagestudent);
	public void DeleteManagestudent(managestudent pmanagestudent);
	public void UpdateManagestudent(managestudent pmanagestudent);
	public managestudent QueryManagestudent(managestudent pmanagestudent);
	public void  AddManageteacher(manageteacher pManageteacher);
	public void DeleteManageteacher(manageteacher pManageteacher);
	public void UpdateManageteacher(manageteacher pManageteacher);
	public item QueryManageteacher(manageteacher pManageteacher);
	
}
