package com.insharp.jobvacancy.Job.Vacancy.Site.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.insharp.jobvacancy.Job.Vacancy.Site.models.ERole;
import com.insharp.jobvacancy.Job.Vacancy.Site.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {

	Optional<Role> findByName(ERole name);

}
