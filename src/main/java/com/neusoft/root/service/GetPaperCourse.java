package com.neusoft.root.service;

import java.util.List;

import javax.security.auth.Subject;

import com.neusoft.root.domain.Paper;
import com.neusoft.root.domain.Subjects;

public interface GetPaperCourse {
	public List<Paper> getPaperCourse(String subjects);
}
