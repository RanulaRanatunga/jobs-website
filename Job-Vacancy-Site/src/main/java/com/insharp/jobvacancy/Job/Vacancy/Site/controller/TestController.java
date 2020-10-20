package com.insharp.jobvacancy.Job.Vacancy.Site.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.insharp.jobvacancy.Job.Vacancy.Site.models.ProfileInfo;
import com.insharp.jobvacancy.Job.Vacancy.Site.models.User;
import com.insharp.jobvacancy.Job.Vacancy.Site.repository.JobsInterestedInRepository;
import com.insharp.jobvacancy.Job.Vacancy.Site.repository.ProfileInfoRepository;
import com.insharp.jobvacancy.Job.Vacancy.Site.repository.UserRepository;

@RestController
@RequestMapping("/api/chart")
public class TestController {

	@Autowired
	UserRepository userRepository;

	@Autowired
	ProfileInfoRepository profileInfoRepository;

	@Autowired
	JobsInterestedInRepository jobsInterestedInRepository;

	User tempUser = new User();

	int count1;
	int count2;

	@GetMapping("/date")
	public String displayDate() {
		Calendar c = Calendar.getInstance();
		c.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
		System.out.println("Date " + c.getTime());
		return c.getTime().toString();
	}

//	@GetMapping("/getDate/{id}")
//	public void checkSameDate(@PathVariable("id") String id) {
//
//		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
//
//		Calendar c = Calendar.getInstance();
//		c.set(Calendar.DAY_OF_WEEK, Calendar.THURSDAY);
//		String time1 = format1.format(c.getTime());
////		System.out.println(time1);
//
//		User user = userRepository.findById(id).get();
//		String time2 = format1.format(user.getDate());
////		System.out.println(time2);
//
//		if (time1.toString().equals(time2.toString())) {
//			System.out.println(true);
//		} else {
//			System.out.println(false);
//		}
//	}

	@GetMapping("/test")
	public void getSummery() {

		Calendar now = Calendar.getInstance();

		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

		String[] days = new String[7];
		int delta = -now.get(GregorianCalendar.DAY_OF_WEEK) + 1; // add 2 if your week start on monday
		now.add(Calendar.DAY_OF_MONTH, delta);
		for (int i = 0; i < 7; i++) {
			days[i] = format.format(now.getTime());
			now.add(Calendar.DAY_OF_MONTH, 1);
		}
//	    System.out.println(Arrays.toString(days));

		// This array for store relevant data
		List<Integer> val = new ArrayList<Integer>();

		for (String day : days) {
			int supportMethod = supportMethod(day);
			int supportMethod2 = supportMethod2(day);
			val.add(supportMethod2);
			count1 = 0;
			count2 = 0;

		}

		for (int i = 0; i < val.size(); i++) {
			System.out.println(val.get(i));
		}
	}

	public int supportMethod(String date) {

		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");

		List<ProfileInfo> profiles = profileInfoRepository.findAll();

		if (profiles.size() != 0) {
			for (ProfileInfo profile : profiles) {
				if (profile.getDate() != null && format1.format(profile.getDate()).toString().equals(date)
						&& profile.getApprovedStatus() == true) {
					System.out.println("approval");
					count1 += 1;

				} else if (profile.getDate() != null && format1.format(profile.getDate()).toString().equals(date)
						&& profile.getIsFreelancer() == true) {
					System.out.println("freelancer");
					count1 += 1;
				} else if (profile.getDate() != null && format1.format(profile.getDate()).toString().equals(date)
						&& profile.getJobsInterestedInStatus() == true) {
					System.out.println("jobs interested");
					count1 += 1;
				} else if (profile.getDate() != null && format1.format(profile.getDate()).toString().equals(date)) {
					System.out.println("profile");
					count1 += 1;
				} else {

				}
			}
		}
		return count1;
	}

	public int supportMethod2(String date) {
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
		List<User> users = userRepository.findAll();
		if (users.size() != 0) {
			for (User user : users) {
				if (user.getDate() != null && format1.format(user.getDate()).toString().equals(date)) {
//					System.out.println(user.getId());
					count2 += 1;
				}
			}
		}
		return count2;
	}
}
