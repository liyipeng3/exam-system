package com.neusoft.root.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;

public class StudentInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		HttpSession session = request.getSession();
		String username = (String) session.getAttribute("flag");
		if(username.equals("student")){
			System.out.println(request.getRequestURI()+"通过学生身份认证:" + username);
			return true;
		}
		else{
			//response.sendRedirect("url");
			System.out.println(request.getRequestURI()+"未通过学生身份认证:" + username);
			request.getRequestDispatcher("/login").forward(request, response);
			return false;
		}
	}
	
}
