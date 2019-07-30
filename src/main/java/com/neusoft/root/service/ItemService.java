package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.ParsedItem;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.RawItem;
/**
 * 试题
 * @author Warriors
 *
 */
public interface ItemService {
	/**
	 * 获取科目所有题目
	 * @param subjects 科目
	 * @return 该科目所有题目
	 */
	public List<RawItem> queryRawItem(String subjects);
	/**
	 * 获取科目所有题目
	 * @param ID 
	 * @return 该科目所有题目
	 */
	public List<RawItem> queryRawItem(Integer ID);
	/**
	 * 增加试题
	 * @param json rawitem串
	 */
	public void addRawItem(JSONObject json);
	/**
	 * 删除试题
	 * @param rawItem rawitem串
	 */
	public void deleteRawItem(Integer id);
	/**
	 * 更新试题
	 * @param rawItem rawitem串
	 */
	public void updateRawItem(JSONObject json);
	/**
	 * 查询试题
	 * @param subjects 科目
	 * @return parseditem的list
	 */
	public List<ParsedItem> queryParsedItem(String subjects);
	/**
	 * 查询试题
	 * @param rawItem rawitem串
	 * @return parseditem的list
	 */
	public List<ParsedItem> queryParsedItem(Integer ID);
}
