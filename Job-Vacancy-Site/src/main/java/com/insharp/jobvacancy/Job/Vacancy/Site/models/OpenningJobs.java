package com.insharp.jobvacancy.Job.Vacancy.Site.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "openningJobs")
public class OpenningJobs {

	@Id
	private String id;
	private String jobTitle;
	private String workPlace;

	public OpenningJobs(String jobTitle, String workPlace) {
		this.jobTitle = jobTitle;
		this.workPlace = workPlace;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getWorkPlace() {
		return workPlace;
	}

	public void setWorkPlace(String workPlace) {
		this.workPlace = workPlace;
	}

}
