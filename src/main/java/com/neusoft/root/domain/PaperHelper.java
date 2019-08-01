package com.neusoft.root.domain;

import java.util.HashMap;
import java.util.Map;

public class PaperHelper 
{
	private RawPaper rawPaper;
	private Map<Integer, Double> singleQuestion;
	private Map<Integer, Double> multiQuestion;
	private Map<Integer, Double> fillQuestion;
	private Map<Integer, Double> subjectiveQuestion;
	private Double paperScore;
	public PaperHelper(RawPaper rawPaper) 
	{
		super();
		this.rawPaper = rawPaper;
		parse();
	}
	
	private void parse()
	{
		paperScore = rawPaper.getPaperScore();
		singleQuestion = new HashMap<>();
		multiQuestion = new HashMap<>();
		fillQuestion = new HashMap<>();
		subjectiveQuestion = new HashMap<>();
		parseQuestion(singleQuestion, rawPaper.getSinglechoiceQuestion());
		parseQuestion(multiQuestion, rawPaper.getMultichoiceQuestion());
		parseQuestion(fillQuestion, rawPaper.getFillQuestion());
		parseQuestion(subjectiveQuestion, rawPaper.getSubjectiveQuestion());
		
	}
	
	private void parseQuestion(Map<Integer, Double> map, String question)
	{
		String[] splited = question.split("\\#\\#\\#");
		Integer itemId;
		Double itemScore;
		String[] temp;
		for (int i = 0; i < splited.length; i++) 
		{
			temp = splited[i].split("\\?\\?\\?");
			itemId = Integer.valueOf(temp[0]);
			itemScore = Double.valueOf(temp[1]);
			map.put(itemId, itemScore);
		}
	}
	
	public Map<Integer, Double> getSingleQuestion() {
		return singleQuestion;
	}

	public Map<Integer, Double> getMultiQuestion() {
		return multiQuestion;
	}

	public Map<Integer, Double> getFillQuestion() {
		return fillQuestion;
	}

	public Map<Integer, Double> getSubjectiveQuestion() {
		return subjectiveQuestion;
	}

	public Double getPaperScore() {
		return paperScore;
	}
}
