import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { experienceReleventJobs, getCurrentUser, retrieveAllJobsInterestedIn } from '../actions'

class InterestedJobsList extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser && this.props.currentUser !== prevProps.currentUser) {
            this.props.retrieveAllJobsInterestedIn(this.props.currentUser.id)
        }
    }

    onChecked = job => {
        this.props.experienceReleventJobs(this.props.currentUser.id, job.id)
    }

    renderList(jobs) {
        return jobs.map(job => {
            return (
                <div key={job.id}>
                    <ul>
                        <li>
                            <div>
                                <input type="checkbox" defaultChecked={job.experience} name={job.id} onChange={() => this.onChecked(job)} />
                                <label>{job.name}</label>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        })
    }

    render() {
        // console.log(this.props.jobs)
        return (
            <div>
                {this.props.jobs && this.renderList(this.props.jobs)}
                <Link to="/freelancer">Next</Link>
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return {
        currentUser: state.user,
        jobs: state.allJobsInterestedIn,
        experienceResponse: state.experiencedJobs
    }
}

export default connect(mapsStateToProps, { getCurrentUser, retrieveAllJobsInterestedIn, experienceReleventJobs })(InterestedJobsList)