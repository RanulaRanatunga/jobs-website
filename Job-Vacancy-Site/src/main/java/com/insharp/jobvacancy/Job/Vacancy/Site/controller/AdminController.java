package com.insharp.jobvacancy.Job.Vacancy.Site.controller;

import java.util.List;

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

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/admin")
public class AdminController {
	
	@Autowired
	OpenningJobsRepository openningJobsRepository;
	
	@Autowired
	JobsInterestedInRepository jobsInterestedInRepository;
	
	@Autowired
	ProfileInfoRepository profileInfoRepository;

	@PostMapping("/addJobs")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> addOpenningJobs(@RequestBody OpenningJobs openningJobs) {
		openningJobsRepository.save(openningJobs);
		return ResponseEntity.ok(new MessageResponse("Successfully Added!"));
	}
	
//	This is use for retrieve relevant ids of jobs
	@GetMapping("/allJobs")
	@PreAuthorize("hasRole('MODERATOR')")
	public ResponseEntity<?> getAlljobs() {
		List<JobsInterestedIn> all = jobsInterestedInRepository.findAll();
		return ResponseEntity.ok(all);
	}
	
	@GetMapping("/retrieveAllProfiles")
	@PreAuthorize("hasRole('MODERATOR')")
	public ResponseEntity<?> retrieveAllUsers() {
		List<ProfileInfo> profiles = profileInfoRepository.findAll();
		return ResponseEntity.ok(profiles);
	}
	
	@PutMapping("/setApproval/{userId}")
	@PreAuthorize("hasRole('MODERATOR')")
	public ResponseEntity<?> setApproval(@PathVariable("userId") String userId, @RequestParam("status") Boolean approvedStatus) {
		ProfileInfo profileInfo = profileInfoRepository.findByUserId(userId).get();
		profileInfo.setApprovedStatus(approvedStatus);
		profileInfoRepository.save(profileInfo);
		return ResponseEntity.ok(new MessageResponse("Successfully Approved!"));
	}
}
