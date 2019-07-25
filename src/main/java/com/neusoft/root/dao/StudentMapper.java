package com.neusoft.root.dao;

import java.util.List;
import java.util.Map;

import com.mysql.cj.protocol.Message;
import com.neusoft.root.domain.Class1;
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.Courseteacher;
import com.neusoft.root.domain.Forum;
import com.neusoft.root.domain.Log;
import com.neusoft.root.domain.Managestudent;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Result;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;

public interface StudentMapper {
	
	//查询考试班级时间课程
	public Map<String ,Object> queryManagestudent(Managestudent managestudent);
	
	//论坛帖子的增加删除查询
	public void addForum(Forum forum);
	public void deleteForum(Forum forum);
	public List<Forum> queryForum(Forum forum);
	
	//log
	public void  addLog(Log plog);
	public List<Object> queryLog(Log plog);
	
	//对消息进行增删查操作
	public void addMessage(Message message);
	public void deleteMessage(Message message);
	public List<Message> queryMessage(Message message);
	
	//对试卷查看
	public List<RawPaper> queryPaper(RawPaper rawpaper);
	
	//答题result
	public void addResult(Result result);
	
	
	//学生
	//改密码
	public void updateStudent(Student student);
	public List<Student> queryStudent(Student student);
}
