import React from 'react'
import { connect } from 'react-redux'
import { getCurrentUser, profileInfo } from '../actions'
import ProfileForm from './ProfileForm'

class Profile extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser()
    }
    onSubmit = formValues => {
        if (this.props.currentUser) {
            formValues.userId = this.props.currentUser.id
            console.log(formValues)
            this.props.profileInfo(formValues)
        }
    }
    render() {
        console.log(this.props.response)
        return (
            <div>
                <div>
                    <h3>User Profile</h3>
                    <ProfileForm onSubmit={this.onSubmit} />
                    {this.props.response === 'Error: Unauthorized' ? <div>Unauthorized User</div> : <div></div>}
                </div>
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return {
        currentUser: state.user,
        response: state.profileInfo
    }
}

export default connect(mapsStateToProps, { getCurrentUser, profileInfo })(Profile)