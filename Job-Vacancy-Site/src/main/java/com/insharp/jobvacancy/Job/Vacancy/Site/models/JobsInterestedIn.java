package com.insharp.jobvacancy.Job.Vacancy.Site.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.insharp.jobvacancy.Job.Vacancy.Site.utility.Jobs;

@Document(collection = "jobsInterestedIn")
public class JobsInterestedIn {

	@Id
	private String id;
	private String userId;
	private List<Jobs> jobs;

	public JobsInterestedIn(String userId, List<Jobs> jobs) {
		this.userId = userId;
		this.jobs = jobs;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public List<Jobs> getJobs() {
		return jobs;
	}

	public void setJobs(List<Jobs> jobs) {
		this.jobs = jobs;
	}
}
