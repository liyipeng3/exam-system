package com.neusoft.root.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.ParsedItem;
import com.neusoft.root.domain.ParsedPaper;
import com.neusoft.root.domain.RawItem;
import com.neusoft.root.domain.RawPaper;

import com.neusoft.root.domain.Subjects;


@Service
public class PaperServiceImpl implements PaperService{
	@Autowired
	TeacherMapper mapper;
	@Autowired
	ItemService service ;
	@Override
	public void addRawPaper(JSONObject json) {
		// TODO Auto-generated method stub
		Double diffcult = 0.0;
		//int  j= json.getInteger("option_length");
		if(json.getString("difficult").equals("简单题"))
		{
			diffcult = 1.0;
		}
		else if(json.getString("difficult").equals("普通题"))
		{
			diffcult =3.0;
		}
		else if(json.getString("difficult").equals("困难题"))
		{
			diffcult = 5.0;
		}
		String singlequestion = "";
		int i=1;
		while(json.getString("singleQuestion"+i)!=null)
		{
			singlequestion = singlequestion+json.getString("singleQuestion"+i)+","+json.getDouble("singleScore"+i)+"###";
			i++;
		}
		
		singlequestion = singlequestion.substring(0, singlequestion.length()-3);
		String mutiquestion = "";
		i=1;
		while(json.getString("mutiQuestion"+i)!=null)
		{
			mutiquestion = mutiquestion+json.getString("mutiQuestion"+i)+","+json.getDouble("mutiScore"+i)+"###";
			i++;
		}
			mutiquestion = mutiquestion.substring(0, mutiquestion.length()-3);
		String fillquestion = "";
		i=1;
		while(json.getString("fillQuestion"+i)!=null)
		{
			fillquestion = fillquestion+json.getString("fillQuestion"+i)+","+json.getDouble("fillScore"+i)+"###";
			i++;
		}
			fillquestion = fillquestion.substring(0, fillquestion.length()-3);
		String subjectivequestion = "";
		i=1;
		while(json.getString("subjectiveQuestion"+i)!=null)
		{
			subjectivequestion = subjectivequestion+json.getString("subjectiveQuestion"+i)+","+json.getDouble("subjectiveScore"+i)+"###";
			i++;
		}
			subjectivequestion = subjectivequestion.substring(0, subjectivequestion.length()-3);
		RawPaper rawPaper = new RawPaper((Integer)0, json.getString("paperName"),json.getString("createrId"), json.getString("createDate"), json.getString("paperType"), diffcult, singlequestion, mutiquestion, fillquestion, subjectivequestion, json.getDouble("paperScore"), json.getString("paperSecrecy"), json.getString("paperRemark"));
		mapper.addRawPaper(rawPaper);
	}

	@Override
	public List<String> queryPaperCourse() {
		// TODO Auto-generated method stub
		List<RawPaper> list = mapper.queryRawPaper(null);
		Set<String> set = new HashSet<>();
		for(RawPaper x:list)
		{
			set.add(x.getPaperType());
		}
		List<String> list2 = new ArrayList<>();
		for(String s:set)
		{
			list2.add(s);
		}
		return list2;
	}



	@Override
	public void deleteRawPaper(Integer id) {
		// TODO Auto-generated method stub
		RawPaper rawPaper = new RawPaper(id, "", "", "", "", 0.0, "", "","", "", (Double)0.0, "", "");
		mapper.deleteRawPaper(rawPaper);
	
	}



	@Override
	public void updateRawPaper(JSONObject json) {
		// TODO Auto-generated method stub
		Double diffcult = 0.0;
		//int  j= json.getInteger("option_length");
		if(json.getString("difficult").equals("简单题"))
		{
			diffcult = 1.0;
		}
		else if(json.getString("difficult").equals("普通题"))
		{
			diffcult =3.0;
		}
		else if(json.getString("difficult").equals("困难题"))
		{
			diffcult = 5.0;
		}
		String singlequestion = "";
		int i=1;
		//System.out.println("###");
		while(json.getString("singleQuestion"+i)!=null)
		{
			singlequestion = singlequestion+json.getString("singleQuestion"+i)+","+json.getDouble("singleScore"+i)+"###";
			i++;
		}
		singlequestion = singlequestion.substring(0, singlequestion.length()-3);
		String mutiquestion = "";
		i=1;
	//	System.out.println("!!!");
		while(json.getString("mutiQuestion"+i)!=null)
		{
			mutiquestion = mutiquestion+json.getString("mutiQuestion"+i)+","+json.getDouble("mutiScore"+i)+"###";
			i++;
		}
			mutiquestion = mutiquestion.substring(0, mutiquestion.length()-3);
		String fillquestion = "";
		i=1;
		//System.out.println("&&");
		while(json.getString("fillQuestion"+i)!=null)
		{
			fillquestion = fillquestion+json.getString("fillQuestion"+i)+","+json.getDouble("fillScore"+i)+"###";
			i++;
		}
			fillquestion = fillquestion.substring(0, fillquestion.length()-3);
		String subjectivequestion = "";
		i=1;
		//System.out.println("@@@");
		while(json.getString("subjectiveQuestion"+i)!=null)
		{
			subjectivequestion = subjectivequestion+json.getString("subjectiveQuestion"+i)+","+json.getDouble("subjectiveScore"+i)+"###";
			i++;
		}
//System.out.println("((");
		subjectivequestion = subjectivequestion.substring(0, subjectivequestion.length()-3);
		RawPaper rawPaper = new RawPaper(json.getInteger("paperId"), json.getString("paperName"),json.getString("createrId"), json.getString("createDate"), json.getString("paperType"), diffcult, singlequestion, mutiquestion, fillquestion, subjectivequestion, json.getDouble("paperScore"), json.getString("paperSecrecy"), json.getString("paperRemark"));
		//System.out.println(rawPaper.toString());
		mapper.updateRawPaper(rawPaper);
	}



	@Override
	public List<RawPaper> queryRawPaper() {
		// TODO Auto-generated method stub
		List<RawPaper> list = mapper.queryRawPaper(null);
		return list;
	}



	@Override
	public List<ParsedPaper> queryParsedPaper(Integer id) {
		System.out.println("paper"+id);
		// TODO Auto-generated method stub
		RawPaper rawPaper = new RawPaper(id, "", "", "", "", 0.0, "", "","", "", (Double)0.0, "", "");
		List<RawPaper> list = mapper.queryRawPaper(rawPaper);
		List<ParsedPaper> list2 = new ArrayList<>();
		//ItemService service = new ItemServiceImpl();
		Integer ID =0;
		//System.out.println("@@@");
		for(RawPaper paper:list)
		{
			List<ParsedItem> q1 = new ArrayList<>() ;
			List<ParsedItem> questionservice1 ;
			String [] question1 = paper.getSinglechoiceQuestion().split("###");
			for(int i=0;i<question1.length;i++)
			{
				String [] line = question1[i].split(",");
				if(line.length!=0)
				{
					//System.out.println("!!!");
					ID = Integer.valueOf(line[0]);
					//System.out.println(ID);
				}
			//	System.out.println("2");
				questionservice1 = service.queryParsedItem(ID);
				//System.out.println(questionservice1==null);
				for(ParsedItem x:questionservice1)
				{
					x.setItemScore(Double.valueOf(line[1]));
				//	System.out.println(x.toString());
					q1.add(x);
				}
			}
		//	System.out.println(q1.toString());
			List<ParsedItem> q2 = new ArrayList<>() ;
			List<ParsedItem> questionservice2 ;
			String [] question2 = paper.getMultichoiceQuestion().split("###");
			for(int i=0;i<question2.length;i++)
			{
				String [] line = question2[i].split(",");
				if(line.length!=0)
				{
					ID = Integer.valueOf(line[0]);
				}
				questionservice2 = service.queryParsedItem(ID);
				for(ParsedItem x:questionservice2)
				{
					q2.add(x);
				}
			}
			List<ParsedItem> q3 = new ArrayList<>() ;
			List<ParsedItem> questionservice3 ;
			String [] question3 = paper.getFillQuestion().split("###");
			for(int i=0;i<question3.length;i++)
			{
				String [] line = question3[i].split(",");
				if(line.length!=0)
				{
					ID = Integer.valueOf(line[0]);
				}
				questionservice3 = service.queryParsedItem(ID);
				for(ParsedItem x:questionservice3)
				{
					q3.add(x);
				}
			}
			List<ParsedItem> q4 = new ArrayList<>() ;
			List<ParsedItem> questionservice4 ;
			String [] question4 = paper.getSubjectiveQuestion().split("###");
			for(int i=0;i<question4.length;i++)
			{
				String [] line = question4[i].split(",");
				if(line.length!=0)
				{
					ID = Integer.valueOf(line[0]);
				}
				questionservice4 = service.queryParsedItem(ID);
				for(ParsedItem x:questionservice4)
				{
					
					q4.add(x);
				}
			}
		//	System.out.println(q1.toString()+q2.toString()+q3.toString()+q4.toString());
			ParsedPaper parsedPaper = new ParsedPaper(paper.getPaperId(), paper.getPaperName(), paper.getCreaterId(), paper.getCreateDate(),paper.getPaperType(), paper.getPaperIndex(), q1, q2, q3, q4, paper.getPaperScore(), paper.getPaperSecrecy(), paper.getPaperRemark());
			list2.add(parsedPaper);	
			
		}
		return list2;
		
	}

	@Override
	public List<ParsedItem> createPaper(String subjects,String type) {
		// TODO Auto-generated method stub
		//System.out.println(subjects+type);
		List<ParsedItem> list = service.queryParsedItem(subjects);
		//System.out.println(list.toString());
		List<ParsedItem> list2 = new ArrayList<>();
		for(ParsedItem item:list)
		{
			if(item.getItemType().equals(type))
			{
				//System.out.println("!!");
				list2.add(item);
			}
		}
		return list2;
	}	
	
	
}
