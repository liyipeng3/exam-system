package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Manageteacher;
/**
 * 管理老师
 * @author Warriors
 *
 */
public interface ManageTeacherService {
	/**
	 * 增加管理老师
	 * @param json manageteacher串
	 */
	public void addManageteacher(JSONObject json);
	/**
	 * 删除管理老师
	 * @param json managestudent串
	 */
	public void deleteManageteacher(JSONObject json);
	/**
	 * 更新管理老师
	 * @param json managestudent串
	 */
	public void updateManageteacher(JSONObject json);
	/**
	 * 查询
	 * @param json managestudent串
	 * @return 查询结果list
	 */
	public List<Manageteacher> queryManageteacher(JSONObject json);
}
