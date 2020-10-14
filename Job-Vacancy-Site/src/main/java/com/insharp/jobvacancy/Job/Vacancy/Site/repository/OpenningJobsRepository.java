package com.insharp.jobvacancy.Job.Vacancy.Site.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.insharp.jobvacancy.Job.Vacancy.Site.models.OpenningJobs;

public interface OpenningJobsRepository extends MongoRepository<OpenningJobs, String>{

}
