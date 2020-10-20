import React from 'react'
import { connect } from 'react-redux';
import { signup } from '../actions';
import SignupForm from './signupForm';

class SignupComponent extends React.Component {
    onSubmit = formValues => {
        this.props.signup(formValues);
    }

    isSuccessful() {
        if (this.props.reg) {
            return this.props.reg.successful
        }
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                {!this.isSuccessful() &&
                    <div>
                        <h1 className="ui center aligned header">Sign Up</h1>
                        <SignupForm onSubmit={this.onSubmit} />
                    </div>
                }
                {this.props.reg && this.props.reg.message && (
                    <div className="ui form error">
                        <div className="ui error message">
                            {this.props.reg.message}
                        </div>
                        <p></p>
                    </div>
                )}
                {this.props.reg && !this.props.reg.message && (
                    <div className="ui form error">
                        <div className="ui error message">
                            {this.props.reg.response}
                        </div>
                        <p></p>
                    </div>
                )}
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return { reg: state.signup }
}

export default connect(mapsStateToProps, { signup })(SignupComponent)