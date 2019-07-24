package com.neusoft.root.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.neusoft.root.interceptor.AdminInterceptor;
import com.neusoft.root.interceptor.LoginInterceptor;
import com.neusoft.root.interceptor.StudentInterceptor;
import com.neusoft.root.interceptor.TeacherInterceptor;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**","/login*", "/register*", "/html/**");/*
		registry.addInterceptor(new StudentInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/login/**", "/register/**", "/html/**", "/teacher", "/index");
		registry.addInterceptor(new TeacherInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/login/**", "/register/**", "/html/**", "/student", "/index");
		registry.addInterceptor(new AdminInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/login/**", "/register/**", "/html/**", "/index");*/
	}

}
