package com.insharp.jobvacancy.Job.Vacancy.Site.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.insharp.jobvacancy.Job.Vacancy.Site.models.User;

public interface UserRepository extends MongoRepository<User, String> {

	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

}
