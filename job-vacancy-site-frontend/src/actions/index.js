import jobVacancyApi from '../apis/jobVacancyApi'
import authHeader from '../services/auth-header'
import history from '../history'

export const openningJobVacancy = () => async dispatch => {
    await jobVacancyApi.get('/api/test/allOpenningJobs').then(
        response => {
            dispatch({ type: 'JOB_VACANCY', payload: response.data })
        },
        error => {
            const response = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            dispatch({ type: 'JOB_VACANCY_ERROR', payload: response })
        }
    )
}

export const signup = formValues => async dispatch => {
    await jobVacancyApi.post('/api/auth/signup', formValues).then(
        response => {
            dispatch({ type: 'SIGN_UP', payload: { ...response.data, ...{ successful: true } } })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'SIGN_UP_ERROR', payload: { response, ...{ successful: false } } })
        }
    )
}

export const login = formValues => async dispatch => {
    await jobVacancyApi.post('/api/auth/signin', formValues).then(
        response => {
            localStorage.setItem("user", JSON.stringify(response.data))
            dispatch({ type: 'SIGN_IN', payload: { ...response.data } })
            history.push('/profile')
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'AUTH_ERROR', payload: response })
        }
    )

}

export const getCurrentUser = () => {
    return {
        type: 'GET_USER',
        payload: JSON.parse(localStorage.getItem('user'))
    }
}

export const profileInfo = formValues => async dispatch => {
    await jobVacancyApi.post('/api/test/addProfileInfo', formValues, { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'PROFILE_INFO', payload: { ...response.data } })
            history.push('/addJobsInterestedIn')
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'PROFILE_INFO_ERROR', payload: response })
        }
    )

}

export const addJobsinterestedIn = formValues => async dispatch => {
    await jobVacancyApi.post('/api/test/addJobsinterestedIn', formValues, { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'JOBS_INTERESTED_IN', payload: { ...response.data } })
            history.push('/retriveAllInterestedJobs')
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'JOBS_INTERESTED_IN_ERROR', payload: response })
        }
    )
}

export const retrieveAllJobsInterestedIn = (userId) => async dispatch => {
    await jobVacancyApi.get(`/api/test/retrieveAllInterestedJobsIn/${userId}`, { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'ALL_JOBS_INTERESTED_IN', payload: response.data })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'ALL_JOBS_INTERESTED_IN_ERROR', payload: response })
        }
    )
}

export const experienceReleventJobs = (userId, id) => async dispatch => {
    await jobVacancyApi.put(`/api/test/update/${userId}/${id}`, {}, { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'CHECK_BOX', payload: { ...response.data } })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'CHECK_BOX_ERROR', payload: response })
        }
    )
}

export const isFreelancer = (userId, status) => async dispatch => {
    await jobVacancyApi.put(`/api/test/setAsFreelancer/${userId}/?status=${status}`, {}, { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'FREELANCER', payload: { ...response.data } })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'FREELANCER_ERROR', payload: response })
        }
    )
}

export const retrieveProfileInfo = userId => async dispatch => {
    await jobVacancyApi.get(`/api/test/retrieveProfileInfo/${userId}`, { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'GET_PROFILE_INFO', payload: { ...response.data } })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'GET_PROFILE_INFO_ERROR', payload: response })
        }
    )
}

export const retrieveAllProfiles = () => async dispatch => {
    await jobVacancyApi.get('/api/admin/retrieveAllProfiles', { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'ALL_PROFILES', payload: response.data })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'ALL_PROFILES_ERROR', payload: response })
        }
    )
}

export const setApproval = (userId, status) => async dispatch => {
    await jobVacancyApi.put(`/api/admin/setApproval/${userId}/?status=${status}`, {}, { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'APPROVAL_STATUS', payload: { ...response.data } })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'APPROVAL_STATUS_ERROR', payload: response })
        }
    )
}