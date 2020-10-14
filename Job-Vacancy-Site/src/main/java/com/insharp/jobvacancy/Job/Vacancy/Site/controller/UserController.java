package com.insharp.jobvacancy.Job.Vacancy.Site.controller;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.insharp.jobvacancy.Job.Vacancy.Site.models.JobsInterestedIn;
import com.insharp.jobvacancy.Job.Vacancy.Site.models.OpenningJobs;
import com.insharp.jobvacancy.Job.Vacancy.Site.models.ProfileInfo;
import com.insharp.jobvacancy.Job.Vacancy.Site.payload.response.MessageResponse;
import com.insharp.jobvacancy.Job.Vacancy.Site.repository.JobsInterestedInRepository;
import com.insharp.jobvacancy.Job.Vacancy.Site.repository.OpenningJobsRepository;
import com.insharp.jobvacancy.Job.Vacancy.Site.repository.ProfileInfoRepository;
import com.insharp.jobvacancy.Job.Vacancy.Site.utility.Jobs;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class UserController {

	@Autowired
	ProfileInfoRepository profileInfoRepository;

	@Autowired
	JobsInterestedInRepository jobsInterestedInRepository;
	
	@Autowired
	OpenningJobsRepository openningJobsRepository;

	@GetMapping("/allOpenningJobs")
	public ResponseEntity<?> retrieveOpenningJobs() {
		List<OpenningJobs> allJobs = openningJobsRepository.findAll();
		return ResponseEntity.ok(allJobs);
	}

	@PostMapping("/addProfileInfo")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> saveProfileInfo(@Valid @RequestBody ProfileInfo profileInfo) {
		profileInfo.setApprovedStatus(false);
		profileInfoRepository.save(profileInfo);
		return ResponseEntity.ok(new MessageResponse("Added Profile Information Successfully!"));
	}

	@PostMapping("/addJobsinterestedIn")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> addJobsInteresetedIn(@Valid @RequestBody JobsInterestedIn jobs) {
		jobs.getJobs().forEach(job -> job.setId(UUID.randomUUID()));
		jobsInterestedInRepository.save(jobs);
		return ResponseEntity.ok(new MessageResponse("Added Jobs Interested In!"));
	}
	
	@GetMapping("/retrieveAllInterestedJobsIn/{userId}")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> retrieveAllJobsInterestedIn(@PathVariable("userId") String userId) {
		List<Jobs> jobs = jobsInterestedInRepository.findByUserId(userId).get().getJobs();
		return ResponseEntity.ok(jobs);
	}
	
	@PutMapping("/update/{userId}/{id}")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> hasExperienceReleventJobs(@PathVariable("userId") String userId, @PathVariable("id") String id) {
		JobsInterestedIn jobsInterestedIn = jobsInterestedInRepository.findByUserId(userId).get();
		jobsInterestedIn.getJobs().forEach(job -> {
			if (job.getId().toString().equals(id)) {
				if (job.getExperience() == false) {
					job.setExperience(true);
				} else {
					job.setExperience(false);
				}
			}
		});
//		jobsInterestedIn.getJobs().forEach(job -> System.out.println(job.getExperience()));
		jobsInterestedInRepository.save(jobsInterestedIn);
		return ResponseEntity.ok(new MessageResponse("Successfully update the status of experience"));
	}
	
	@PutMapping("/setAsFreelancer/{id}")
//	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> isFreelancer(@PathVariable("id") String id, @RequestParam("status") Boolean statusFreelancer) {
		ProfileInfo profileInfo = profileInfoRepository.findByUserId(id).get();
		profileInfo.setIsFreelancer(statusFreelancer);
		profileInfoRepository.save(profileInfo);
		return ResponseEntity.ok("Successfully updated the status of freelancer");
	}
	
	@GetMapping("/retrieveProfileInfo/{userId}")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> retireveProfileInfo(@PathVariable("userId") String userId) {
		if (profileInfoRepository.existsByUserId(userId)) {
			ProfileInfo profileInfo = profileInfoRepository.findByUserId(userId).get();
			return ResponseEntity.ok(profileInfo);
		} else {
			return ResponseEntity.ok(null);
		}
	}
}
