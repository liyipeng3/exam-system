package com.neusoft.root.dao;

import com.mysql.cj.protocol.Message;
import com.neusoft.root.domain.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TeacherMapper {
    //批阅试卷增删改查
	void addCheck(RawCheck check);

    void deleteCheck(RawCheck check);

    void updateCheck(RawCheck check);

    List<RawCheck> queryCheck(RawCheck check);

    //对老师课程查询
	List<Courseteacher> queryCourseteacher(Courseteacher courseteacher);

    //对学生课程查询
	List<Coursestudent> queryCoursestudent(Coursestudent coursestudent);

    //论坛帖子的增加删除查询
	void addForum(Forum forum);

    void deleteForum(Forum forum);

    List<Forum> queryForum(Forum forum);


    //题库的增删改查
	void addRawItem(RawItem rawItem);

    void deleteRawItem(RawItem rawItem);

    void updateRawItem(RawItem rawItem);

    List<RawItem> queryRawItem(RawItem rawItem);

    //log
	void addMyLog(MyLog myLog);

    List<MyLog> queryMyLog(MyLog myLog);


    //对消息进行增删查操作
	void addMessage(Message message);

    void deleteMessage(Message message);

    List<Message> queryMessage(Message message);

    //试卷的增删改查
	void addRawPaper(RawPaper paper);

    void deleteRawPaper(RawPaper paper);

    void updateRawPaper(RawPaper paper);

    List<RawPaper> queryRawPaper(RawPaper paper);

    //老师
    //改密码
    //查询
	void updateTeacher(Teacher teacher);

    List<Teacher> queryTeacher(Teacher teacher);

    List<Student> queryStudent(Student student);

    //管理老师
	List<Manageteacher> queryManageteacher(Manageteacher manageteacher);

    //老师查询学生答卷
	List<RawResult> queryResult(RawResult rawResult);

    //管理考试
	void addExam(Exam exam);

    List<Exam> queryExam(Exam exam);

}
