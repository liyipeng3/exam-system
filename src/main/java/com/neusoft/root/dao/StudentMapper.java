package com.neusoft.root.dao;

import com.mysql.cj.protocol.Message;
import com.neusoft.root.domain.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StudentMapper {

    //查询考试班级时间课程
    List<Managestudent> queryManagestudent(Managestudent managestudent);

    //论坛帖子的增加删除查询
    void addForum(Forum forum);

    void deleteForum(Forum forum);

    List<Forum> queryForum(Forum forum);

    //log
    void addMyLog(MyLog myLog);

    List<MyLog> queryMyLog(MyLog myLog);

    //对消息进行增删查操作
    void addMessage(Message message);

    void deleteMessage(Message message);

    List<Message> queryMessage(Message message);

    //对试卷查看
    List<RawPaper> queryPaper(RawPaper rawpaper);

    //答题result
    void addResult(RawResult result);

    //学生
    //改密码
    void updateStudent(Student student);

    List<Student> queryStudent(Student student);
}
