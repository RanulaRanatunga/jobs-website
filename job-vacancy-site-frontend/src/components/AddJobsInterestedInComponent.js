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
            <div className="ui container" style={{marginTop: '20px'}}>
                <h1 className="ui center aligned header">Add jobs that you interested</h1>
                <div style={{marginTop: '30px'}}>
                    <JobsInterestedInForm onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return { currentUser: state.user }
}

export default connect(mapsStateToProps, { getCurrentUser, addJobsinterestedIn })(AddJobsInterestedIn)