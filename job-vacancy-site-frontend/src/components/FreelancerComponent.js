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
            <div className="ui container" style={{ marginTop: '20px' }}>
                <div className="ui icon message">
                    <i className="inbox icon"></i>
                    <div className="content">
                        <div className="header">
                            <label>Are you a Freelancer?</label>
                        </div>
                        <div style={{marginTop: '10px'}}>
                            <div style={{padding:'3px'}}>
                                <input type="radio" name="response" value={true} onChange={this.handleChange} />
                                <label>Yes</label>
                            </div>
                            <div style={{padding: '3px'}}>
                                <input type="radio" name="response" value={false} onChange={this.handleChange} />
                                <label>No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui center aligned container">
                    <Link to="/responseVacancy" className="ui right labeled icon button">
                        <i className="right arrow icon"></i>
                        {this.state.btn ? 'Next' : 'Skip'}
                    </Link>
                </div>
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return { currentUser: state.user }
}

export default connect(mapsStateToProps, { getCurrentUser, isFreelancer })(Freelancer)