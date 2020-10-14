import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { retrieveAllProfiles } from '../actions'

class ModeratorPanel extends React.Component {

    componentDidMount() {
        this.props.retrieveAllProfiles()
    }

    renderList(profiles) {
        return profiles.map(profile => {
            return (
                <div key={profile.id}>
                    <ul>
                        <li>{profile.fullName} <Link to={`/profileInfo/${profile.userId}`}>Show Profiles</Link></li>
                    </ul>
                </div>
            )
        })
    }

    render() {
        // console.log(this.props.allProfiles)
        return (
            <div>
                {this.props.allProfiles && this.renderList(this.props.allProfiles)}
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return { allProfiles: state.allProfiles }
}

export default connect(mapsStateToProps, { retrieveAllProfiles })(ModeratorPanel)