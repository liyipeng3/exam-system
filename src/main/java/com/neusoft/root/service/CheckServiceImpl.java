package com.neusoft.root.service;

import static org.assertj.core.api.Assertions.setAllowComparingPrivateFields;

import java.awt.color.ICC_ColorSpace;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import org.apache.ibatis.reflection.wrapper.BaseWrapper;
import org.hamcrest.core.IsEqual;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.ItemChecking;
import com.neusoft.root.domain.PaperChecking;
import com.neusoft.root.domain.PaperHelper;
import com.neusoft.root.domain.ParsedCheck;
import com.neusoft.root.domain.RawCheck;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.RawResult;

@Service
public class CheckServiceImpl implements CheckService{
	@Autowired
	TeacherMapper mapper;
	
	private static String[] alphas = new String[]{"A","B","C",
			"D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
			"R","S","T","U","V","W","X","Y","Z"};
	
	@Override
	public List<PaperChecking> queryPaperChecking(JSONObject json) 
	{
		List<PaperChecking> checkings = new ArrayList<>(); //新建一张paperchecking用于页面显示 
		
		//查出学生答题结果
		RawResult rr = new RawResult();
		rr.setStudentId(json.getString("studentId"));
		rr.setPaperId(Integer.valueOf(json.getString("paperId")));
		rr.setTeacherId(json.getString("teacherId"));
		List<RawResult> rawResults = mapper.queryResult(rr);
		if (rawResults.size()==0) 
		{
			System.out.println("逻辑错误");
			System.exit(1);
		}
		RawResult result = rawResults.get(0);
		
		//查询出试卷
		RawPaper rawPaper = new RawPaper();
		rawPaper.setPaperId(Integer.valueOf(json.getString("paperId")));
		List<RawPaper> list = mapper.queryRawPaper(rawPaper);
		RawPaper targetRawPaper = list.get(0);
		PaperHelper ph = new PaperHelper(targetRawPaper);
		
		//创建解析试卷
		PaperChecking pc = new PaperChecking();
		pc.setStudentId(json.getString("studentId"));
		pc.setPaperId(Integer.valueOf(json.getString("paperId")));
		pc.setTeacherId(json.getString("teacherId"));
		pc.setSumScore(targetRawPaper.getPaperScore());
		pc.setStudentScore(0.0);
		//解析单选题
		parse(ph.getSingleQuestion(), pc.getSingleItem(), "单选题", result.getSinglechoiceResult());
		
		//解析多选题
		parse(ph.getMultiQuestion(), pc.getMultiItem(), "多选题", result.getMultichoiceResult());
		
		//解析填空题
		parse(ph.getFillQuestion(), pc.getFillItem(), "填空题", result.getFillResult());
		
		//解析主观题
		parse(ph.getSubjectiveQuestion(), pc.getSubjectiveItem(), "主观题", result.getSubjectiveResult());
		
		//将答案转换为ABC字符
		for (ItemChecking itemChecking : pc.getSingleItem()) 
		{
			toAlpha(itemChecking.getItemOption(), itemChecking.getStudentAnswer());
			toAlpha(itemChecking.getItemOption(), itemChecking.getRightAnswer());
		}
		
		for (ItemChecking itemChecking : pc.getMultiItem()) 
		{
			toAlpha(itemChecking.getItemOption(), itemChecking.getStudentAnswer());
			toAlpha(itemChecking.getItemOption(), itemChecking.getRightAnswer());
		}
		
		System.out.println(1);
		//选择题自动评分
		for (ItemChecking itemChecking : pc.getSingleItem()) 
		{
			autoScore(itemChecking);
			pc.setStudentScore(pc.getStudentScore()+itemChecking.getStudentScore());
		}
		
		for (ItemChecking itemChecking : pc.getMultiItem()) 
		{
			autoScore(itemChecking);
			pc.setStudentScore(pc.getStudentScore()+itemChecking.getStudentScore());
		}
		
		//字符串自动评分
		for (ItemChecking itemChecking : pc.getFillItem()) 
		{
			autoScoreString(itemChecking);
			pc.setStudentScore(pc.getStudentScore()+itemChecking.getStudentScore());
		}
		
		for (ItemChecking itemChecking : pc.getSubjectiveItem()) 
		{
			autoScoreString(itemChecking);
			pc.setStudentScore(pc.getStudentScore()+itemChecking.getStudentScore());
		}
		
		checkings.add(pc);
		
		RawCheck rc = paperCheckingToRawCheck(pc);
		rc.setCheckDate(json.getString("checkDate"));
		mapper.addCheck(rc);
		return checkings;
	}

	private void parse(Map<Integer, Double> score, List<ItemChecking> list, String type, String question)
	{
		Integer itemId;
		String[] studentAnswer;
		String[] line;
		String[] detail;
		RawItem targetRawItem, searchRawItem;
		ItemChecking ic;
		if (question!=null&&(!question.equals(""))) 
		{
			line = question.split("\\#\\#\\#");
			for (int i = 0; i < line.length; i++) 
			{
				ic = new ItemChecking();
				detail = line[i].split("\\?\\?\\?");
				itemId = Integer.valueOf(detail[0]);  // 题目ID
				studentAnswer = detail[1].split("\\!\\!\\!");  //学生答案
				searchRawItem = new RawItem();
				searchRawItem.setItemId(itemId);
				//从题库中获取题目
				targetRawItem = mapper.queryRawItem(searchRawItem).get(0);
				ic.setItemId(itemId);
				ic.setItemType(type);
				ic.setItemQuestion(targetRawItem.getItemQuestion());
				ic.setItemOption(new ArrayList<>(Arrays.asList(targetRawItem.getItemOption().split("\\#\\#\\#"))));
				ic.setStudentAnswer(new ArrayList<>(Arrays.asList(studentAnswer)));
				ic.setRightAnswer(new ArrayList<>(Arrays.asList(targetRawItem.getItemAnswer().split("\\#\\#\\#"))));
				ic.setRemark(targetRawItem.getItemParse());
				ic.setItemScore(score.get(itemId));
				list.add(ic);
			}
		}
	}
	
	private void autoScoreString(ItemChecking item)
	{
		item.setStudentScore(new Random(System.currentTimeMillis()).nextDouble()*item.getItemScore());
	}
	
	private void autoScore(ItemChecking item)
	{
		if (isListEqual(item.getRightAnswer(), item.getStudentAnswer())) 
		{
			item.setStudentScore(item.getItemScore());
			item.setIsRight("yes");
		}
		else
		{
			item.setStudentScore(0.);
			item.setIsRight("no");
		}
	}
	
	private void toAlpha(List<String> optionList, List<String> answerList)
	{
		int optionLength = optionList.size();
		int answerLength = answerList.size();
		for (int i = 0; i < answerLength; i++) 
		{
			for (int j = 0; j < optionLength; j++) 
			{
				if (answerList.get(i).equals(optionList.get(j))) 
				{
					answerList.set(i, alphas[j]);
				}
			}
		}
	}
	
	private static <E> boolean isListEqual(List<E> list1, List<E> list2) {
		// 两个list引用相同（包括两者都为空指针的情况）
		if (list1 == list2) {
			return true;
		}
		
		// 两个list都为空（包括空指针、元素个数为0）
		if ((list1 == null && list2 != null && list2.size() == 0)
				|| (list2 == null && list1 != null && list1.size() == 0)) {
			return true;
		}
		
		// 两个list元素个数不相同
		if (list1.size() != list2.size()) {
			return false;
		}
		
		// 两个list元素个数已经相同，再比较两者内容
		// 采用这种可以忽略list中的元素的顺序
		// 涉及到对象的比较是否相同时，确保实现了equals()方法
		if (!list1.containsAll(list2)) {
			return false;
		}
		
		return true; 
	}
	
	private RawCheck paperCheckingToRawCheck(PaperChecking pc)
	{
		DecimalFormat df = new DecimalFormat("#.00");
		RawCheck rawCheck = new RawCheck();
		rawCheck.setStudentId(pc.getStudentId());
		rawCheck.setPaperId(pc.getPaperId());
		rawCheck.setTeacherId(pc.getTeacherId());
		String singlechoiceScore = "";
		String multichoiceScore = "";
		String fillScore = "";
		String subjectiveScore = "";
		for (ItemChecking ic : pc.getSingleItem()) 
		{
			singlechoiceScore += ic.getItemId()+","+df.format(ic.getStudentScore())+"###";
		}
		for (ItemChecking ic : pc.getMultiItem()) 
		{
			multichoiceScore += ic.getItemId()+","+df.format(ic.getStudentScore())+"###";
		}
		for (ItemChecking ic : pc.getFillItem()) 
		{
			fillScore += ic.getItemId()+","+df.format(ic.getStudentScore())+"###";
		}
		for (ItemChecking ic : pc.getSubjectiveItem()) 
		{
			subjectiveScore += ic.getItemId()+","+df.format(ic.getStudentScore())+"###";
		}
		rawCheck.setSinglechoiceScore(singlechoiceScore);
		rawCheck.setMultichoiceScore(multichoiceScore);
		rawCheck.setFillScore(fillScore);
		rawCheck.setSubjectiveScore(subjectiveScore);
		rawCheck.setSumScore(Double.valueOf(df.format(pc.getStudentScore())));
		return rawCheck;
	}
}