package com.neusoft.root.service;

import com.alibaba.fastjson.JSONObject;
/**
 * 登录
 * @author Warriors
 *
 */
public interface LoginService {
	/**
	 * 登录
	 * @param username 用户名
	 * @param password 密码
	 * @return 标记变量1=管理员2=老师3=学生0=无效密码
	 */
	public int Login(String username, String password);
}
