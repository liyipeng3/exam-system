package com.neusoft.root.log;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import com.neusoft.root.controller.LoginController;
import com.neusoft.root.service.LoginService;

@Documented
@Target()
@Retention(RetentionPolicy.RUNTIME)
public @interface Log {
	
}