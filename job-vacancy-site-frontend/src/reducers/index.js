import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import jobVacancyReducer from "./oppenningJobVacancyReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import getCurrentUserReducer from "./getCurrentUserReducer";
import profileInfoReducer from "./profileInfoReducer";

export default combineReducers({
    form: formReducer,
    jobVacancy: jobVacancyReducer,
    signup: signupReducer,
    login: loginReducer,
    user: getCurrentUserReducer,
    profileInfo: profileInfoReducer
})