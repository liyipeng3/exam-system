package com.neusoft.root.service;

import java.util.List;


import javax.security.auth.Subject;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.ParsedItem;
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
	public Integer addRawPaper(JSONObject json);
	/**
	 * 删除试卷
	 * @param json rawpaper串
	 */
	public void deleteRawPaper(Integer id);
	/**
	 * 更新试卷
	 * @param json rawpaper串
	 */
	public void updateRawPaper(JSONObject json);
	/**
	 * 查询paper
	 * @return rawpaper的list
	 */
	public List<RawPaper> queryRawPaper();
	/**
	 * 查询paper
	 * @param id 
	 * @return 试卷
	 */
	public RawPaper queryRawPaper(Integer id);
	/**
	 * 查询paper
	 * @return parsedpaper的list
	 */
	public ParsedPaper queryParsedPaper(Integer id);
	/**
	 * 获取所有课程
	 * @return 课程名字的list
	 */
	public List<String> queryPaperCourse();
	/**
	 * 随机组卷
	 * @param subjects 科目
	 * @param type 题型
	 */
	public List<ParsedItem> createPaper(String subjects,String type);
	/**
	 * 随机组卷
	 * @param name 试卷名字
	 * @param subjects 科目
	 * @return 试卷
	 */
	public ParsedPaper randPaper(String name,String subjects,String ID);
}
