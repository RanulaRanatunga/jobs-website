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
            <div>
                {!this.isSuccessful() &&
                    <div>
                        <h3>Sign Up</h3>
                        <SignupForm onSubmit={this.onSubmit} />
                    </div>
                }
                {this.props.reg && this.props.reg.message && (
                    <div>
                        <div>
                            {this.props.reg.message}
                        </div>
                        <p></p>
                    </div>
                )}
                {this.props.reg && !this.props.reg.message && (
                    <div>
                        <div>
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