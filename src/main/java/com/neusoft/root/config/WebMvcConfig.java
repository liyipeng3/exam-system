 package com.neusoft.root.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.neusoft.root.interceptor.LoginInterceptor;
import com.neusoft.root.interceptor.SInterceptor;
import com.neusoft.root.interceptor.SSInterceptor;
import com.neusoft.root.interceptor.SSSInterceptor;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/**").excludePathPatterns("/error", "/css/**", "/js/**",
				"/fonts/**", "/img/**", "/login*", "/login/**", "/register*", "/register/**");
		/*registry.addInterceptor(new SSSInterceptor()).addPathPatterns("/**").excludePathPatterns("/error", "/css/**", "/js/**",
				"/fonts/**", "/img/**", "/html/**", "/login*", "/login/**", "/register*", "/register/**", "/teacher*", "/teacher/**", "/student*", "/student/**", "/exam*", "/exam/**");
		registry.addInterceptor(new SSInterceptor()).addPathPatterns("/**").excludePathPatterns("/error", "/css/**", "/js/**",
				"/fonts/**", "/img/**", "/html/**", "/login*", "/login/**", "/register*", "/register/**", "/index*", "/index/**", "/student*", "/student/**");
		registry.addInterceptor(new SInterceptor()).addPathPatterns("/**").excludePathPatterns("/error", "/css/**", "/js/**",
				"/fonts/**", "/img/**", "/html/**", "/login*", "/login/**", "/register*", "/register/**", "/index*", "/index/**", "/teacher*", "/teacher/**", "/exam*", "/exam/**");*/
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
