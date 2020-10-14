import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentUser, profileInfo, retrieveAllJobsInterestedIn, retrieveProfileInfo } from '../actions'
import ProfileForm from './ProfileForm'

class Profile extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser !== prevProps.currentUser) {
            this.props.retrieveProfileInfo(this.props.currentUser.id)
            this.props.retrieveAllJobsInterestedIn(this.props.currentUser.id)
        }
    }

    onSubmit = formValues => {
        if (this.props.currentUser) {
            formValues.userId = this.props.currentUser.id
            this.props.profileInfo(formValues)
        } else {
            this.props.profileInfo(formValues)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h3>User Profile</h3>
                    {
                        this.props.profile && Object.keys(this.props.profile).length ?
                            <div>
                                <p>You have alredy added profile Information. Please click Next!</p>
                                <Link to={this.props.allJobs && Object.keys(this.props.allJobs).length ? '/retriveAllInterestedJobs' : '/addJobsInterestedIn'}>Next</Link>
                            </div> : <ProfileForm onSubmit={this.onSubmit} />
                    }
                    {this.props.response === 'Error: Unauthorized' ? <div>Unauthorized User!</div> : <div></div>}
                </div>
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return {
        currentUser: state.user,
        response: state.profileInfo,
        profile: state.allProfileInfo,
        allJobs: state.allJobsInterestedIn
    }
}

export default connect(mapsStateToProps, { getCurrentUser, profileInfo, retrieveProfileInfo, retrieveAllJobsInterestedIn })(Profile)