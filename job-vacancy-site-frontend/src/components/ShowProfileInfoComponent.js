import React from 'react'
import { connect } from 'react-redux'
import { retrieveProfileInfo, setApproval } from '../actions'

class ShowProfileInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            status: null
        }
    }

    componentDidMount() {
        this.props.retrieveProfileInfo(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.profile !== prevProps.profile) {
            this.setState({status: this.props.profile.approvedStatus})
        }
    }

    setApprove(approvedStatus) {
        approvedStatus  === false ? this.setState({status: true}) : this.setState({status:false})
        this.props.setApproval(this.props.profile.userId, !approvedStatus)
    }

    renderList(profileInfo) {
        return (
            <ul>
                <li>{profileInfo.middleName}</li>
                <li>{profileInfo.lastName}</li>
                <li>{profileInfo.address}</li>
                <li>{profileInfo.city}</li>
                <li>{profileInfo.province}</li>
                <li>{profileInfo.email}</li>
                <li>{profileInfo.phoneNum}</li>
            </ul>
        )
    }

    render() {
        if (this.props.profile) {
            return (
                <div>
                    <h2>Profile Information of {this.props.profile.fullName}</h2>
                    {this.renderList(this.props.profile)}
                    <button onClick={() => this.setApprove(this.state.status)}>
                        {this.state.status === false ? 'Aproove' : 'Disapproved'}
                    </button>
                </div>
            )
        }
        return <div></div>
    }
}

const mapsStateToProps = state => {
    return {
        profile: state.allProfileInfo,
        approveResponse: state.setApproval
    }
}

export default connect(mapsStateToProps, { retrieveProfileInfo, setApproval })(ShowProfileInfo)