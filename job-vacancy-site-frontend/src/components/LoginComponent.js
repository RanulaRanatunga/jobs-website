import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import LoginForm from './LoginForm';

class LoginComponent extends React.Component {

    onSubmit = formValues => {
        this.props.login(formValues);
    }

    isAuthenticated(state) {
        if (!state.id) {
            return (
                <div>
                    <div>
                        <p>{this.props.isSignIn}</p>
                    </div>
                </div>
            );
        }
    }

    render() {
        console.log(this.props.isSignIn)
        return (
            <div>
                <h3>Login</h3>
                <LoginForm onSubmit={this.onSubmit} />
                <br />
                {this.props.isSignIn && this.isAuthenticated(this.props.isSignIn)}
                <Link to="/signup">Sign Up</Link>
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return { isSignIn: state.login }
}

export default connect(mapsStateToProps, { login })(LoginComponent);