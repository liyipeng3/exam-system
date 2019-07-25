package com.neusoft.root.log;

import java.util.logging.Logger;

import org.hibernate.validator.internal.util.logging.LoggerFactory;

@A
	@Component
	public class VBSAspect {
	    private static final Logger log= LoggerFactory.getLogger(VBSAspect.class);

	    @Pointcut("@annotation(com.vcash.wechat.annotation.Log)")
	    public void logPointcut(){}

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
	

