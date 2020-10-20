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
                <div key={job.id} className="ui middle aligned selection list">
                    <div className="item">
                        <i class="large briefcase middle aligned icon"></i>
                        <div className="content">
                            <div className="header">{job.jobTitle}</div>
                            <div className="description">{job.workPlace}</div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <h1 className="ui center aligned header">
                    Openning Vacancies
                </h1>
                <div>{this.props.openningJobs && this.renderList(this.props.openningJobs)}</div>
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return { openningJobs: state.jobVacancy }
}

export default connect(mapsStateToProps, { openningJobVacancy })(Home)