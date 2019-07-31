package com.neusoft.root.service;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.domain.PaperChecking;
import com.neusoft.root.domain.ParsedCheck;
import com.neusoft.root.domain.RawCheck;
/**
 * 老师批改试卷
 * @author Warriors
 *
 */
public interface CheckService {
	/**
	 * 增加批改试卷
	 * @param json check串
	 */
	public void addCheck(JSONObject json);
	/**
	 * 删除老师批卷结果
	 * @param json check串
	 */
	public void deleteCheck(JSONObject json);
	/**
	 * 更新老师批卷结果
	 * @param json check串
	 */
	public void updateCheck(JSONObject json);
	/**
	 * 查询老师批卷结果
	 * @param json check串
	 * @return 查询rawcheck结果list
	 */
	public List<RawCheck> queryRawCheck(JSONObject json);
	/**
	 * 查询老师批卷结果
	 * @param json check串
	 * @return 查询parsedcheck结果list
	 */
	public List<ParsedCheck> queryParsedCheck(JSONObject json);
	
	/**
	 * 你需要给我studentId,paperId,teacherId
	 * @param json
	 * @return
	 */
	public List<PaperChecking> queryPaperChecking(JSONObject json);
	
}
