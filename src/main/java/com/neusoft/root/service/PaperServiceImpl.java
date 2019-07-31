package com.neusoft.root.service;

import static org.mockito.Mockito.lenient;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import org.hibernate.validator.internal.util.StringHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.neusoft.root.dao.AdminMapper;
import com.neusoft.root.dao.TeacherMapper;
import com.neusoft.root.domain.Course;
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
	@Autowired
	PaperService service2;
	@Autowired
	AdminMapper AdminMapper;
	@Override
	public Integer addRawPaper(JSONObject json) {
		// TODO Auto-generated method stub
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
		String date = df.format(new Date());// new Date()为获取当前系统时间
		String current = String.valueOf(System.currentTimeMillis());
		String courseid = json.getString("paperType");
		Course course = new Course();
		course.setCourseId(courseid);
		List<Course> list = AdminMapper.queryCourse(course);
		String paperType = list.get(0).getCourseType();
		int x = 1;
		String subjectivequestion = "";
		String singlequestion = "";
		String mutiquestion = "";
		String fillquestion = "";
		boolean flag1 =false;
		boolean flag2 = false;
		boolean flag3 = false;
		boolean flag4 = false;
		while(json.getString("testType"+x)!=null)
		{
			if(json.getString("testType"+x).equals("1"))//单选
			{
				if(flag1==true)
				{
					singlequestion = singlequestion+"$$$";
				}
				String testid1 = json.getString("testIds"+x);
				testid1 = testid1.substring(0, testid1.length()-1);
				String line1[] = testid1.split(",");
				String querstionscores1 = json.getString("questionScores"+x);
				querstionscores1 = querstionscores1.substring(0,  querstionscores1.length()-1);
				String scores1[] = querstionscores1.split(",");
				for(int i=0;i<line1.length;i++)
				{
					if(line1.length!=scores1.length)
					{
						singlequestion = singlequestion+line1[i]+","+scores1[0]+","+json.getString("testTittle"+x)+","+x+"###";
					}
					else
					{
						singlequestion = singlequestion+line1[i]+","+scores1[i]+","+json.getString("testTittle"+x)+","+x+"###";
					}
					
				}
				if(!singlequestion.equals(""))
				singlequestion = singlequestion.substring(0, singlequestion.length()-3);
				flag1 = true;
			}
			else if(json.getString("testType"+x).equals("2"))//多选
			{
				if(flag2==true)
				{
					mutiquestion = mutiquestion+"$$$";
				}
				String testid2 = json.getString("testIds"+x);
				testid2 = testid2.substring(0, testid2.length()-1);
				String line2[] = testid2.split(",");
				String querstionscores2 = json.getString("questionScores"+x);
				querstionscores2 = querstionscores2.substring(0,  querstionscores2.length()-1);
				String scores2[] = querstionscores2.split(",");
				for(int i=0;i<line2.length;i++)
				{
					if(line2.length!=scores2.length)
					{
						mutiquestion = mutiquestion+line2[i]+","+scores2[0]+","+json.getString("testTittle"+x)+","+x+"###";
					}
					else
					{
						mutiquestion = mutiquestion+line2[i]+","+scores2[i]+","+json.getString("testTittle"+x)+","+x+"###";
					}
					
				}
				if(!mutiquestion.equals(""))
				mutiquestion = mutiquestion.substring(0, mutiquestion.length()-3);
				flag2 = true;
			}
			else if(json.getString("testType"+x).equals("4"))//填空
			{
				if(flag3==true)
				{
					fillquestion = fillquestion+"$$$";
				}
				String testid3 = json.getString("testIds"+x);
				testid3 = testid3.substring(0, testid3.length()-1);
				String line3[] = testid3.split(",");
				String querstionscores3 = json.getString("questionScores"+x);
				querstionscores3 = querstionscores3.substring(0,  querstionscores3.length()-1);
				String scores3[] = querstionscores3.split(",");
				for(int i=0;i<line3.length;i++)
				{
					if(line3.length!=scores3.length)
					{
						fillquestion = fillquestion+line3[i]+","+scores3[0]+","+json.getString("testTittle"+x)+","+x+"###";
					}
					else
					{
						fillquestion = fillquestion+line3[i]+","+scores3[i]+","+json.getString("testTittle"+x)+","+x+"###";	
					}
					
				}
				if(!fillquestion.equals(""))
				fillquestion = fillquestion.substring(0, fillquestion.length()-3);
				flag3  =true;
			}
			else if(json.getString("testType"+x).equals("5"))//主观
			{
				if(flag4==true)
				{
					subjectivequestion = subjectivequestion+"$$$";
				}
				String testid4 = json.getString("testIds4");
				testid4 = testid4.substring(0, testid4.length()-1);
				String line4[] = testid4.split(",");
				String querstionscores4 = json.getString("questionScores4");
				querstionscores4 = querstionscores4.substring(0,  querstionscores4.length()-1);
				String scores4[] = querstionscores4.split(",");
				for(int i=0;i<line4.length;i++)
				{
					if(line4.length!=scores4.length)
					{
						subjectivequestion = subjectivequestion+line4[i]+","+scores4[0]+","+json.getString("testTittle"+x)+","+x+"###";
					}
					else
					{
						subjectivequestion = subjectivequestion+line4[i]+","+scores4[i]+","+json.getString("testTittle"+x)+","+x+"###";
					}
				
				}
				if(!subjectivequestion.equals(""))
				subjectivequestion = subjectivequestion.substring(0, subjectivequestion.length()-3);
				flag4 = true;
			}
			else
			{
				System.out.println("无效题目类型！！！！");
				System.exit(0);
			}
			x++;
		}
		
		
		
		RawPaper rawPaper = new RawPaper((Integer)0, json.getString("paperName"),json.getString("createrId"), date, paperType, 3.0, singlequestion, mutiquestion, fillquestion, subjectivequestion, json.getDouble("totalScore"), "保密", current);
		mapper.addRawPaper(rawPaper);
		rawPaper.setPaperId(null);
		Integer id = mapper.queryRawPaper(rawPaper).get(0).getPaperId();
		return id;
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
		RawPaper rawPaper = new RawPaper(id, "", "","", "", (Double)0.0, "", "","", "", (Double)0.0, "", "");
		mapper.deleteRawPaper(rawPaper);
	
	}



	@Override
	public void updateRawPaper(JSONObject json) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
		String date = df.format(new Date());// new Date()为获取当前系统时间
		String current = String.valueOf(System.currentTimeMillis());
		String courseid = json.getString("paperType");
		Course course = new Course();
		course.setCourseId(courseid);
		List<Course> list = AdminMapper.queryCourse(course);
		String paperType = list.get(0).getCourseType();
		int x = 1;
		String subjectivequestion = "";
		String singlequestion = "";
		String mutiquestion = "";
		String fillquestion = "";
		while(json.getString("testType"+x)!=null)
		{
			if(json.getString("testType"+x).equals("1"))//单选
			{
				String testid1 = json.getString("testIds"+x);
				testid1 = testid1.substring(0, testid1.length()-1);
				String line1[] = testid1.split(",");
				String querstionscores1 = json.getString("questionScores"+x);
				querstionscores1 = querstionscores1.substring(0,  querstionscores1.length()-1);
				String scores1[] = querstionscores1.split(",");
				for(int i=0;i<line1.length;i++)
				{
					singlequestion = singlequestion+line1[i]+","+scores1[i]+","+json.getString("testTittle"+x)+","+x+"###";
				}
				if(!singlequestion.equals(""))
				singlequestion = singlequestion.substring(0, singlequestion.length()-3);
			}
			else if(json.getString("testType"+x).equals("2"))//多选
			{
				String testid2 = json.getString("testIds"+x);
				testid2 = testid2.substring(0, testid2.length()-1);
				String line2[] = testid2.split(",");
				String querstionscores2 = json.getString("questionScores"+x);
				querstionscores2 = querstionscores2.substring(0,  querstionscores2.length()-1);
				String scores2[] = querstionscores2.split(",");
				for(int i=0;i<line2.length;i++)
				{
					mutiquestion = mutiquestion+line2[i]+","+scores2[i]+","+json.getString("testTittle"+x)+","+x+"###";
				}
				if(!mutiquestion.equals(""))
				mutiquestion = mutiquestion.substring(0, mutiquestion.length()-3);
			}
			else if(json.getString("testType"+x).equals("4"))//填空
			{
				String testid3 = json.getString("testIds"+x);
				testid3 = testid3.substring(0, testid3.length()-1);
				String line3[] = testid3.split(",");
				String querstionscores3 = json.getString("questionScores"+x);
				querstionscores3 = querstionscores3.substring(0,  querstionscores3.length()-1);
				String scores3[] = querstionscores3.split(",");
				for(int i=0;i<line3.length;i++)
				{
					fillquestion = fillquestion+line3[i]+","+scores3[i]+","+json.getString("testTittle"+x)+","+x+"###";
				}
				if(!fillquestion.equals(""))
				fillquestion = fillquestion.substring(0, fillquestion.length()-3);
			}
			else if(json.getString("testType"+x).equals("5"))//主观
			{
				String testid4 = json.getString("testIds4");
				testid4 = testid4.substring(0, testid4.length()-1);
				String line4[] = testid4.split(",");
				String querstionscores4 = json.getString("questionScores4");
				querstionscores4 = querstionscores4.substring(0,  querstionscores4.length()-1);
				String scores4[] = querstionscores4.split(",");
				for(int i=0;i<line4.length;i++)
				{
					subjectivequestion = subjectivequestion+line4[i]+","+scores4[i]+","+json.getString("testTittle"+x)+","+x+"###";
				}
				if(!subjectivequestion.equals(""))
				subjectivequestion = subjectivequestion.substring(0, subjectivequestion.length()-3);
			}
			else
			{
				System.out.println("无效题目类型！！！！");
				System.exit(0);
			}
			x++;
		}
		RawPaper rawPaper = new RawPaper((Integer)0, json.getString("paperName"),json.getString("createrId"), date, paperType, 3.0, singlequestion, mutiquestion, fillquestion, subjectivequestion, json.getDouble("totalScore"), "保密", current);
		mapper.updateRawPaper(rawPaper);
	}



	@Override
	public List<RawPaper> queryRawPaper() {
		// TODO Auto-generated method stub
		List<RawPaper> list = mapper.queryRawPaper(null);
		return list;
	}



	@Override
	public ParsedPaper queryParsedPaper(Integer id) {
		System.out.println("paper"+id);
		// TODO Auto-generated method stub
		RawPaper rawPaper = new RawPaper(id, "", "", "", "", 0.0, "", "","", "", (Double)0.0, "", "");
		List<RawPaper> list = mapper.queryRawPaper(rawPaper);
		ParsedPaper list2 ;
		//ItemService service = new ItemServiceImpl();
		Integer ID =0;
		//System.out.println("@@@");)
		if(list.size()!=1)
		{
			System.out.println("试卷Id不唯一！！！");
			System.exit(0);
		}
		else
		{
			
			RawPaper rawPaper2 = list.get(0);
			List<ParsedItem> q1 = new ArrayList<>() ;
			List<ParsedItem> questionservice1 ;
			String [] question1 = rawPaper2.getSinglechoiceQuestion().split("###");
			for(int i=0;i<question1.length;i++)
			{
				String [] line = question1[i].split(",");
				if(line.length!=0)
				{
			//		System.out.println("!!!");
					ID = Integer.valueOf(line[0]);
			//		System.out.println(ID);
				}
			//	System.out.println("2");
				questionservice1 = service.queryParsedItem(ID);
				//System.out.println(questionservice1==null);
				for(ParsedItem x:questionservice1)
				{
					x.setItemScore(Double.valueOf(line[1]));
					//System.out.println(x.toString());
					q1.add(x);
				}
			}
		//	System.out.println("q1"+q1.toString());
			List<ParsedItem> q2 = new ArrayList<>();
			List<ParsedItem> q3 = new ArrayList<>() ;
			List<ParsedItem> q4 = new ArrayList<>() ;
			List<ParsedItem> questionservice2 ;
		/*	System.out.println("kule");
			System.out.println("!!!"+paper.getMultichoiceQuestion()+"!!!");*/
			if(rawPaper2.getMultichoiceQuestion()!=null&&(!rawPaper2.getMultichoiceQuestion().equals("")))
			{
			//	System.out.println("11");
				String [] question2 = rawPaper2.getMultichoiceQuestion().split("###");
				for(int i=0;i<question2.length;i++)
				{
					String [] line = question2[i].split(",");
					if(line.length!=0)
					{
				//		System.out.println("Id"+line[0]);
						ID = Integer.valueOf(line[0]);
					}
				//	System.out.println("Id"+ID);
					questionservice2 = service.queryParsedItem(ID);
				//	System.out.println("接受"+questionservice2);
					for(ParsedItem x:questionservice2)
					{
						q2.add(x);
					//	System.out.println(x);
					}
				}
		
			//	System.out.println(q2.toString());
			}
			
			//System.out.println("出不来？"+q1.toString());
			if(rawPaper2.getFillQuestion()!=null&&(!rawPaper2.getFillQuestion().equals("")))
			{
				List<ParsedItem> questionservice3 ;
				String [] question3 = rawPaper2.getFillQuestion().split("###");
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
			}
			if(rawPaper2.getSubjectiveQuestion()!=null&&(!rawPaper2.getSubjectiveQuestion().equals("")))
			{
				List<ParsedItem> questionservice4 ;
				String [] question4 = rawPaper2.getSubjectiveQuestion().split("###");
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
			}
			//!!!
			//System.out.println("出不来？"+q1.toString());
			//ParsedPaper parsedPaper = new ParsedPaper(paperId, paperName, createrId, createDate, paperType, paperIndex, items, itemsTitle, itemsType, paperScore, paperSecrecy, paperRemark)
			//list2 = parsedPaper;	
			
		
		}
		ParsedPaper paper = new ParsedPaper();
		//System.out.println("@@"+list2.toString());
		return paper;	
		
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

	@Override
	public ParsedPaper randPaper(String name, String subjects,String ID) {
		// TODO Auto-generated method stub
	//	System.out.println(name+subjects+ID);
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
		String date = df.format(new Date());// new Date()为获取当前系统时间
		//System.out.println(date);
		String current = Long.toString(System.currentTimeMillis());
		List<RawItem> list = service.queryRawItem(subjects);
		//List<RawItem> list1 = mapper.queryRawItem(rawItem)
		//ParsedItem list2 ;
		Set<Integer> arr = getRandom(10, list.size());
	//	System.out.println("随机数"+arr.toString());
		RawItem item;
		String singlechoiceQuestion = "";
		String multichoiceQuestion = "";
		String fillQuestion = "";
		String subjectiveQuestion = "";
		Double paperScore = 0.0;
		for(Integer x:arr)
		{
			//Integer itemId = list.get(x).getItemId();
				item = list.get(x);
				if(item.getItemType().equals("单选题"))
				{
					singlechoiceQuestion = singlechoiceQuestion+item.getItemId()+","+item.getItemScore()+"###";
				}
				else if(item.getItemType().equals("多选题"))
				{
					multichoiceQuestion = multichoiceQuestion+item.getItemId()+","+item.getItemScore()+"###";
				}
				else if(item.getItemType().equals("填空题"))
				{
					fillQuestion = fillQuestion+item.getItemId()+","+item.getItemScore()+"###";
				}
				else if(item.getItemType().equals("主观题"))
				{
					subjectiveQuestion = subjectiveQuestion+item.getItemId()+","+item.getItemScore()+"###";
				}
				else
				{
					System.out.println("无效题目类型！");
				}
				paperScore = paperScore + item.getItemScore();
			
		}
		if(singlechoiceQuestion!="")
		{
			singlechoiceQuestion = singlechoiceQuestion.substring(0, singlechoiceQuestion.length()-3);
		}
		if(multichoiceQuestion!="")
		{
			multichoiceQuestion = multichoiceQuestion.substring(0, multichoiceQuestion.length()-3);
		}
		if(fillQuestion!="")
		{
			fillQuestion = fillQuestion.substring(0, fillQuestion.length()-3);
		}
		if(subjectiveQuestion!="")
		{
			subjectiveQuestion = subjectiveQuestion.substring(0, subjectiveQuestion.length()-3);
		}
		RawPaper paper = new RawPaper(0, name, ID, date, subjects, (Double)3.0, singlechoiceQuestion, multichoiceQuestion, fillQuestion, subjectiveQuestion, paperScore, "保密",current);
		mapper.addRawPaper(paper);
		RawPaper paper3= new RawPaper();
		paper3.setPaperName(name);
		paper3.setPaperRemark(current);
		List<RawPaper>  paper2=  mapper.queryRawPaper(paper3);
		Integer  PaperId = paper2.get(0).getPaperId();
	//	System.out.println("PaperID"+PaperId);
		ParsedPaper list3 = service2.queryParsedPaper(PaperId);
				
			//	System.out.println("最终"+list3.get(0));
		return list3;
	}	
	public static Set<Integer> getRandom(Integer wantLength,Integer itemLength) 
	{
		Set<Integer> numberSet = new HashSet<>();
		if (wantLength>=itemLength) 
		{
			for(int i=0;i<itemLength;i++)
			{
				numberSet.add(i);
			}
			return numberSet;
		}
		else
		{
			Random random = new Random(System.currentTimeMillis());
			while(numberSet.size()<wantLength)
			{
				numberSet.add(random.nextInt(itemLength));
			}
			return numberSet;
		}
	}

	@Override
	public RawPaper queryRawPaper(Integer id) {
		// TODO Auto-generated method stub
		RawPaper paper = new RawPaper();
		paper.setPaperId(id);
		List<RawPaper> list = mapper.queryRawPaper(paper);
		return list.get(0);
	}

	
	
}
