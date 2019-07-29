 package com.neusoft.root.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.neusoft.root.interceptor.AdminInterceptor;
import com.neusoft.root.interceptor.LoginInterceptor;
import com.neusoft.root.interceptor.StudentInterceptor;
import com.neusoft.root.interceptor.TeacherInterceptor;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/login*", "/login/**", "/register*", "/register/**","/exam*","/exam/**");
		registry.addInterceptor(new AdminInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/login*", "/login/**", "/register*", "/register/**", "/teacher*", "/teacher/**", "/student*", "/student/**","/exam*","/exam/**");
		registry.addInterceptor(new TeacherInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/login*", "/login/**", "/register*", "/register/**", "/index*", "/index/**", "/student*", "/student/**","/exam*","/exam/**");
		registry.addInterceptor(new StudentInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/login*", "/login/**", "/register*", "/register/**", "/index*", "/index/**", "/teacher*", "/teacher/**","/exam*","/exam/**");
	}
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("POST", "GET", "PUT", "OPTIONS", "DELETE")
                .maxAge(3600)
                .allowCredentials(true);
        
    }

}
