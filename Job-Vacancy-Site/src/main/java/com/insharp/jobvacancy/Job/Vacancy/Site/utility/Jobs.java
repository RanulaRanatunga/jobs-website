package com.insharp.jobvacancy.Job.Vacancy.Site.utility;

import java.util.UUID;

public class Jobs {

	private UUID id;
	private String name;
	private Boolean experience;

	public Jobs(String name, Boolean experience) {
		this.name = name;
		this.experience = experience;
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getExperience() {
		return experience;
	}

	public void setExperience(Boolean experience) {
		this.experience = experience;
	}
}
