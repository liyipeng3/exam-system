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
public interface CheckService 
{
	/**
	 * 你需要给我studentId,paperId,teacherId
	 * @param json
	 * @return
	 */
	public List<PaperChecking> queryPaperChecking(JSONObject json);
	
}
