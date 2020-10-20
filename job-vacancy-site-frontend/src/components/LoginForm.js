import React from 'react'
import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {
    renderInput = ({ input, label }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="username" component={this.renderInput} label="Enter Username" />
                <Field name="password" component={this.renderInput} label="Enter Password" />
                <button className="ui primary button">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'loginForm'
})(LoginForm)