package com.neusoft.root.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.mysql.cj.protocol.Message;
import com.neusoft.root.domain.Check;
import com.neusoft.root.domain.Class1;
import com.neusoft.root.domain.Course;
import com.neusoft.root.domain.Courseteacher;
import com.neusoft.root.domain.Coursestudent;
import com.neusoft.root.domain.Forum;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.MyLog;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Student;
import com.neusoft.root.domain.Teacher;
@Mapper 
public interface TeacherMapper {
	//批阅试卷增删改查
	public void addCheck(Check check);
	public void deleteCheck(Check check);
	public void updateCheck(Map<String, Object> check);
	public List<Check> queryCheck(Check check);
	
	
	//对老师课程查询
	public List<Courseteacher> queryCourseteacher(Courseteacher courseteacher);
	
	//对学生课程查询
	public List<Coursestudent> queryCoursestudent(Coursestudent coursestudent);
	
	//论坛帖子的增加删除查询
	public void addForum(Forum forum);
	public void deleteForum(Forum forum);
	public List<Forum> queryForum(Forum forum);
	
	//题库的增删改查
	public void addRawItem(RawItem rawItem);
	public void deleteRawItem(RawItem rawItem);
	public void updateRawItem(Map<String,Object> rawItem);
	public List<RawItem> queryRawItem(RawItem rawItem);
	
	//log
	public void  addMyLog(MyLog myLog);
	public List<MyLog> queryMyLog(MyLog myLog);
	
	//对消息进行增删查操作
	public void addMessage(Message message);
	public void deleteMessage(Message message);
	public List<Message> queryMessage(Message message);
	
	//试卷的增删改查
	public void addPaper(RawPaper paper);
	public void deletePaper(RawPaper paper);
	public void updatePaper(Map<String,Object> paper);
	public List<RawPaper> queryPaper(RawPaper paper);
	
	//老师
	//改密码
	//查询
	public void updateTeacherPassword(Teacher teacher);
	public List<Teacher> queryTeacher(Teacher teacher);
	public List<Student> queryStudent(Student student);
}
