import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser, retrieveProfileInfo } from '../actions'

class VacancyResponse extends React.Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentUser && this.props.currentUser !== prevProps.currentUser) {
            this.props.retrieveProfileInfo(this.props.currentUser.id)
        }
    }

    render() {
        console.log(this.props.profileInfo)
        return (
            <div>
                <h4>Hi!!! {this.props.profileInfo && this.props.profileInfo.fullName}</h4>
                {this.props.profileInfo &&
                    this.props.profileInfo.approvedStatus === false ? <p>We have recieved your information. Please wait for approval!</p> : <p>Approved!</p>
                }
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return {
        currentUser: state.user,
        profileInfo: state.allProfileInfo
    }
}

export default connect(mapsStateToProps, { getCurrentUser, retrieveProfileInfo })(VacancyResponse)