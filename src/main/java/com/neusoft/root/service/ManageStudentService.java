package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.Managestudent;
/**
 * 安排学生
 * @author Warriors
 *
 */
public interface ManageStudentService {
	/**
	 * 增加安排学生
	 * @param json managestudent串
	 */
	public void addManagestudent(JSONObject json);
	/**
	 * 删除安排学生
	 * @param json managestudent串
	 */
	public void deleteManagestudent(JSONObject json);
	/**
	 * 更新安排学生
	 * @param json managestudent串
	 */
	public void updateManagestudent(JSONObject json);
	/**
	 * 查询管理学生
	 * @param json managestudent串
	 * @return 查询结果list
	 */
	public List<Managestudent> queryManagestudent(JSONObject json);
}
