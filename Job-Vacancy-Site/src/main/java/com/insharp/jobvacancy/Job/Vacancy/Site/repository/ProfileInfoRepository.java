package com.insharp.jobvacancy.Job.Vacancy.Site.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.insharp.jobvacancy.Job.Vacancy.Site.models.ProfileInfo;

public interface ProfileInfoRepository extends MongoRepository<ProfileInfo, String> {

	Optional<ProfileInfo> findByUserId(String id);

	boolean existsByUserId(String userId);

}
