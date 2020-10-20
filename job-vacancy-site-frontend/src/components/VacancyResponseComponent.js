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
        if (this.props.currentUser) {
            return (
                <div>
                    <div className="ui icon message">
                        {this.props.profileInfo &&
                            this.props.profileInfo.approvedStatus === false ? <i class="notched circle loading icon"></i> : <div></div>
                        }
                        <div className="content">
                            <div className="header">
                                Hi!!! {this.props.profileInfo && this.props.profileInfo.fullName}
                            </div>
                            {this.props.currentUser && this.props.profileInfo &&
                                this.props.profileInfo.approvedStatus === true ? <p>Approved!</p> : <p>We have recieved your information. Please wait for approval!</p>
                            }
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="ui red message">Invalid user login. please login again!</div>
            )
        }
    }
}

const mapsStateToProps = state => {
    return {
        currentUser: state.user,
        profileInfo: state.allProfileInfo
    }
}

export default connect(mapsStateToProps, { getCurrentUser, retrieveProfileInfo })(VacancyResponse)