import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import jobVacancyReducer from "./oppenningJobVacancyReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import getCurrentUserReducer from "./getCurrentUserReducer";
import profileInfoReducer from "./profileInfoReducer";
import addJobsinterestedInReducer from "./addJobsinterestedInReducer";
import retrieveAllJobsInterestedInReducer from "./retrieveAllJobsInterestedInReducer";
import experienceReleventJobsReducer from "./experienceReleventJobsReducer";
import freelancerReducer from "./freelancerReducer";
import retrieveProfileInfoReducer from "./retrieveProfileInfoReducer";
import retrieveAllProfilesReducer from "./retrieveAllProfilesReducer";
import setApprovalReducer from "./setApprovalReducer";

export default combineReducers({
    form: formReducer,
    jobVacancy: jobVacancyReducer,
    signup: signupReducer,
    login: loginReducer,
    user: getCurrentUserReducer,
    profileInfo: profileInfoReducer,
    jobsInterestedIn: addJobsinterestedInReducer,
    allJobsInterestedIn: retrieveAllJobsInterestedInReducer,
    experiencedJobs: experienceReleventJobsReducer,
    freelancer: freelancerReducer,
    allProfileInfo: retrieveProfileInfoReducer,
    allProfiles: retrieveAllProfilesReducer,
    setApproval: setApprovalReducer
})