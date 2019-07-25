package com.neusoft.root.log;

import java.lang.reflect.Method;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import com.neusoft.root.domain.Log;

@Aspect
@Component
public class LogAspect {
    //设置切点表达式
    @Pointcut("@annotation(com.nuesoft.root.log.Logger)")
    public void logPointcut(){}
    //环绕通知
    @Around("logPointcut()")
    public Log logHandler(ProceedingJoinPoint process, HttpServletRequest request) throws Throwable{
    	//时间
        long time=System.currentTimeMillis();
        //获得参数
        Object[] args=process.getArgs();
        //获取方法method
        MethodSignature methodSignature= (MethodSignature) process.getSignature();
        Method method=methodSignature.getMethod();
        //获取方法名
        String methodName=method.getName();
        //获得类名
        String className= method.getDeclaringClass().getName();
        //获得注解，"路径,操作"
        Logger logger = method.getAnnotation(Logger.class);
        String value = logger.value();
        String[] svalue = value.split(",");
        String path = svalue[0];
        String operation = svalue[1];
        //获得用户名
        HttpSession session = request.getSession();
        String username = (String) request.getAttribute("username");
        //创建Log类
        System.out.println(time);
        System.out.println(path);
        System.out.println(operation);
        System.out.println(username);
        Log result = new Log();
        return result;
    }
}
