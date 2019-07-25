package com.neusoft.root.log;

import java.lang.reflect.Method;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.mybatis.logging.Logger;
import org.mybatis.logging.LoggerFactory;
import org.springframework.stereotype.Component;



@Aspect
@Component
public class LogAspect {
    private static final Logger log= LoggerFactory.getLogger(LogAspect.class);
    //设置切点表达式
    @Pointcut("@annotation(com.nuesoft.root.log.Log)")
    public void logPointcut(){}
    //环绕通知
    @Around("logPointcut()")
    public Object logHandler(ProceedingJoinPoint process) throws Throwable{
        long startTime=System.currentTimeMillis();
        MethodSignature methodSignature= (MethodSignature) process.getSignature();
        Method method=methodSignature.getMethod();
        String methodName=method.getName();
        String className= method.getDeclaringClass().getName();
        Object[] args=process.getArgs();
        StringBuilder params=new StringBuilder();
        for (int i = 0; i < args.length; i++) {
            params.append(args[i].toString());
            params.append(";");
        }
        Object result= null;
        try {
            result = process.proceed();
        } catch (Throwable throwable) {
            String exception=throwable.getClass()+":"+throwable.getMessage();
            long costTime=System.currentTimeMillis()-startTime;
            log.error("请求时间：{}，请求耗时：{}，请求类名：{}，请求方法：{}，请求参数:{}，请求结果：{}",startTime,costTime,className,methodName,params.toString(),exception);
            return CustomerResponse.buildFail(throwable.getMessage());
        }
        long costTime=System.currentTimeMillis()-beginTime;
        log.info("请求时间：{}，请求耗时：{}，请求类名：{}，请求方法：{}，请求参数:{}，请求结果：{}",startTime,costTime,className,methodName,params.toString(), result);
        return result;
    }
}