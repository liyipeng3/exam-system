package com.neusoft.root.service;

import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Admin;
/**
 * 管理员
 * @author Warriors
 *
 */
public interface AdminService {
	/**
	 * 增加管理员
	 * @param json admin串
	 */
	public void addAdmin(JSONObject json);
	/**
	 * 删除管理员
	 * @param json admin串
	 */
	public void deleteAdmin(JSONObject json);
	/**
	 * 更新管理员信息
	 * @param json admin串
	 */
	public void updateAdmin(JSONObject json);
	/**
	 * 查找管理员信息
	 * @param json admin串
	 * @return 查到的admin串
	 */
	public List<Admin> queryAdmin(JSONObject json);
}
