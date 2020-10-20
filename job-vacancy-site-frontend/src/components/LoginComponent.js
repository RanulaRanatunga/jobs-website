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
            <div className="ui container" style={{marginTop: '20px'}}>
                <h2 className="ui center aligned icon header">
                    <i className="circular users icon"></i>
                    Login
                </h2>
                <div className="ui segment">
                <LoginForm onSubmit={this.onSubmit} />
                </div>
                <br />
                {this.props.isSignIn && this.isAuthenticated(this.props.isSignIn)}
                <Link className="ui red right labeled icon button" to="/signup">
                    <i className="right arrow icon"></i>
                    Sign Up
                </Link>
            </div>
        );
    }
}

const mapsStateToProps = (state) => {
    return { isSignIn: state.login }
}

export default connect(mapsStateToProps, { login })(LoginComponent);