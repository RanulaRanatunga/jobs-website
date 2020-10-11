import jobVacancyApi from '../apis/jobVacancyApi'

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
            // history.push('/profile')
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
    await jobVacancyApi.post('/api/test/addProfileInfo', formValues).then(
        response => {
            dispatch({ type: 'PROFILE_INFO', payload: { ...response.data } })
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