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
            if (jobs.id !== null) {
                return (
                    <div key={job.id} className="item" style={{ marginBottom: "5px" }}>
                        <div className="content" style={{ marginBottom: '10px' }}>
                            <div className="header">
                                <input type="checkbox" defaultChecked={job.experience} name={job.id} onChange={() => this.onChecked(job)} />
                                <label>{job.name}</label>
                            </div>
                        </div>

                    </div>
                )
            }
            else {
                return (
                    <div className="ui large warning message">
                        <p className="ui center aligned container">There are no any interested jobs</p>
                    </div>
                )
            }
        }
        )

    }

    render() {
        // console.log(this.props.jobs)
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <h1 className="ui center aligned header">Interested Jobs</h1>
                <div className="ui middle aligned animated list">
                    {this.props.jobs && this.renderList(this.props.jobs)}
                </div>
                <div className="ui center aligned container">
                    <Link to="/freelancer" className="ui right labeled icon primary button" style={{ marginTop: '10px' }}>
                        <i className="right arrow icon"></i>
                        Next
                    </Link>
                </div>
                <p className="ui message">Please put the tick to jobs that tou have experience</p>
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