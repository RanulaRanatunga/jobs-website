import React from 'react'
import { connect } from 'react-redux'
import { addJobsinterestedIn, getCurrentUser } from '../actions'
import JobsInterestedInForm from './AddJobsInterestedInForm'

class AddJobsInterestedIn extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    onSubmit = formValues => {

        if (this.props.currentUser) {

            var jobs = []

            for (let key in formValues) {
                if (formValues.hasOwnProperty(key)) {
                    jobs.push({
                        "name": formValues[key],
                        "experience": false
                    })
                }
            }

            var jobsListWithUser = {
                "userId": this.props.currentUser.id,
                "jobs": jobs
            }

            this.props.addJobsinterestedIn(jobsListWithUser)
        }
    }

    render() {
        return (
            <div>
                <JobsInterestedInForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return { currentUser: state.user }
}

export default connect(mapsStateToProps, { getCurrentUser, addJobsinterestedIn })(AddJobsInterestedIn)