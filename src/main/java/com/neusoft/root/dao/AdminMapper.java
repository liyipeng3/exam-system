package com.neusoft.root.dao;


import com.neusoft.root.domain.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AdminMapper {
    //管理员
    void addAdmin(Admin admin);

    void deleteAdmin(Admin admin);

    void updateAdmin(Map<String, Object> admin);

    List<Admin> queryAdmin(Admin admin);

    //学生
    void addStudent(Student student);

    void deleteStudent(Student student);

    void updateStudent(Map<String, Object> student);

    List<Student> queryStudent(Student student);

    //班级
    void addClass(Class1 class1);

    void deleteClass(Class1 class1);

    void updateClass(Map<String, Object> class1);

    List<Class1> queryClass(Class1 class1);

    //老师
    void addTeacher(Teacher teacher);

    void deleteTeacher(Teacher teacher);

    void updateTeacher(Map<String, Object> teacher);

    List<Teacher> queryTeacher(Teacher teacher);

    //课程
    void addCource(Course course);

    void deleteCourse(Course course);

    void updateCourse(Map<String, Object> course);

    List<Course> queryCourse(Course course);

    //记录
    void addMyLog(MyLog myLog);

    void deleteMyLog(MyLog myLog);

    void updateMyLog(Map<String, Object> myLog);

    List<MyLog> queryMyLog(MyLog myLog);


    //学生安排考试表的增删改查
    void addManagestudent(Managestudent managestudent);

    void deleteManagestudent(Managestudent managestudent);

    void updateManagestudent(Managestudent managestudent);

    List<Managestudent> queryManagestudent(Managestudent managestudent);

    //老师安排考试表的增删改查
    void addManageteacher(Manageteacher manageteacher);

    void deleteManageteacher(Manageteacher manageteacher);

    void updateManageteacher(Manageteacher manageteacher);

    List<Manageteacher> queryManageteacher(Manageteacher manageteacher);

    //对消息进行增删查操作
    void addMessage(Message message);

    void deleteMessage(Message message);

    List<Message> queryMessage(Message message);

    //学生答题结果
    void addResult(RawResult result);

    List<RawResult> queryResult(RawResult result);

    //论坛帖子的增加删除查询
    void addForum(Forum forum);

    void deleteForum(Forum forum);

    List<Forum> queryForum(Forum forum);

    //老师批卷结果的查询
    List<RawCheck> queryCheck(RawCheck check);


}
