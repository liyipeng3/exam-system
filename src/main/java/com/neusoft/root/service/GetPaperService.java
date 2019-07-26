package com.neusoft.root.service;

import java.util.List;

import javax.security.auth.Subject;


import com.neusoft.root.domain.RawPaper;
import com.neusoft.root.domain.Subjects;

public interface GetPaperService {
	public List<RawPaper> getPaperCourse(String subjects);
}
