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
				"/fonts/**", "/img/**", "/html/**", "/login*", "/login/**", "/register*", "/register/**");
		registry.addInterceptor(new AdminInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/html/**", "/login*", "/login/**", "/register*", "/register/**", "/teacher", "/student");
		registry.addInterceptor(new TeacherInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/html/**", "/login*", "/login/**", "/register*", "/register/**", "/index", "/student");
		registry.addInterceptor(new StudentInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/js/**",
				"/fonts/**", "/img/**", "/html/**", "/login*", "/login/**", "/register*", "/register/**", "/index", "/teacher");
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
