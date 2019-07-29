package com.neusoft.root.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
/**
 * SS级权限拦截器
 * 
 * @author 何时谷雨
 *
 */
public class SSInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		HttpSession session = request.getSession();
		String username = (String) session.getAttribute("username");
		int flag = (int) session.getAttribute("flag");
		if(flag >= 2){
			System.out.println(request.getRequestURI()+"通过SS级身份认证:" + username + flag);
			return true;
		}
		else{
			//response.sendRedirect("url");
			System.out.println(request.getRequestURI()+"未通过SS级身份认证:" + username + flag);
			request.getRequestDispatcher("/login").forward(request, response);
			return false;
		}
	}
	
}
