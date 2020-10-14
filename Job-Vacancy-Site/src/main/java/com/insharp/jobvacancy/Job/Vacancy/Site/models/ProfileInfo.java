package com.insharp.jobvacancy.Job.Vacancy.Site.models;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "profileInfo")
public class ProfileInfo {

	@Id
	private String id;
	@NotBlank
	private String userId;
	@NotBlank
	private String fullName;
	@NotBlank
	private String middleName;
	@NotBlank
	private String lastName;
	@NotBlank
	private String address;
	@NotBlank
	private String city;
	@NotBlank
	private String province;
	@NotBlank
	@Email
	private String email;
	@NotBlank
	private String phoneNum;
	@NotBlank
	private Boolean isFreelancer;
	@NotBlank
	private Boolean approvedStatus;

	public ProfileInfo(String userId, String fullName, String middleName, String lastName, String address, String city,
			String province, String email, String phoneNum, Boolean isFreelancer, Boolean approvedStatus) {
		this.userId = userId;
		this.fullName = fullName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.address = address;
		this.city = city;
		this.province = province;
		this.email = email;
		this.phoneNum = phoneNum;
		this.isFreelancer = isFreelancer;
		this.approvedStatus = approvedStatus;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}

	public Boolean getIsFreelancer() {
		return isFreelancer;
	}

	public void setIsFreelancer(Boolean isFreelancer) {
		this.isFreelancer = isFreelancer;
	}

	public Boolean getApprovedStatus() {
		return approvedStatus;
	}

	public void setApprovedStatus(Boolean approvedStatus) {
		this.approvedStatus = approvedStatus;
	}

}
