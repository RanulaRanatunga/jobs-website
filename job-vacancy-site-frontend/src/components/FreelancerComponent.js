import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentUser, isFreelancer } from '../actions'

class Freelancer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            btn: null
        }
    }

    componentDidMount() {
        this.props.getCurrentUser()
    }

    handleChange = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ btn: true })
        this.props.isFreelancer(this.props.currentUser.id, event.currentTarget.value)
    }

    render() {
        // console.log(this.props.currentUser)
        return (
            <div>
                <label>Are you a Freelancer?</label>
                <div>
                    <div>
                        <input type="radio" name="response" value={true} onChange={this.handleChange} />
                        <label>Yes</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" name="response" value={false} onChange={this.handleChange} />
                        <label>No</label>
                    </div>
                </div>
                <Link to="/responseVacancy">{this.state.btn ? 'Next' : 'Skip'}</Link>
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return { currentUser: state.user }
}

export default connect(mapsStateToProps, { getCurrentUser, isFreelancer })(Freelancer)