package com.neusoft.root.service;

import java.util.List;


import javax.security.auth.Subject;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Subjects;
/**
 * 试卷
 * @author Warriors
 *
 */
public interface PaperService {
	/**
	 * 增加试卷
	 * @param json rawpaper串
	 */
	public void addRawPaper(JSONObject json);
	/**
	 * 删除试卷
	 * @param json rawpaper串
	 */
	public void deleteRawPaper(JSONObject json);
	/**
	 * 更新试卷
	 * @param json rawpaper串
	 */
	public void updateRawPaper(JSONObject json);
	/**
	 * 查询paper
	 * @param json rawpaper串
	 * @return parsedpaper的list
	 */
	public List<ParsedPaper> queryRawPaper(JSONObject json);
	/**
	 * 获取所有课程
	 * @return 课程名字的list
	 */
	public List<String> queryPaperCourse();
	
}
