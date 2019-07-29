package com.neusoft.root.domain;

import java.util.ArrayList;
import java.util.List;

public class Subjects 
{
	List<String> subjects = new ArrayList<>();
	public void add(String str){
		subjects.add(str);
	}
	public List<String> getSubjects() {
		return subjects;
	}
	public void setSubjects(List<String> subjects) {
		this.subjects = subjects;
	}
	
}
