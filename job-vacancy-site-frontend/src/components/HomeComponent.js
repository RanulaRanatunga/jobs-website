import React from 'react'
import { connect } from 'react-redux'
import { openningJobVacancy } from '../actions'

class Home extends React.Component {
    componentDidMount() {
        this.props.openningJobVacancy()
    }

    renderList(openningJobs) {
        return openningJobs.map(job => {
            return (
                <div key={job.id}>
                    <h3>{job.jobTitle}</h3>
                    <p>{job.workPlace}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.props.openningJobs && this.renderList(this.props.openningJobs)}
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return { openningJobs: state.jobVacancy }
}

export default connect(mapsStateToProps, { openningJobVacancy })(Home)