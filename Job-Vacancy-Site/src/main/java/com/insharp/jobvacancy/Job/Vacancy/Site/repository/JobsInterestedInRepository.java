package com.insharp.jobvacancy.Job.Vacancy.Site.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.insharp.jobvacancy.Job.Vacancy.Site.models.JobsInterestedIn;

public interface JobsInterestedInRepository extends MongoRepository<JobsInterestedIn, String> {

	Optional<JobsInterestedIn> findByUserId(String userId);

}
