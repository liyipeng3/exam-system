package com.neusoft.root.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;

public class LoginInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		HttpSession session = request.getSession();
		String username = (String) session.getAttribute("flag");
		System.out.println("LoginInterceptor preHandle:" + username);
		if(username != null){
			return true;
		}
		else{
			//response.sendRedirect("url");
			request.getRequestDispatcher("/login.jsp").forward(request, response);
			return false;
		}
	}

}
