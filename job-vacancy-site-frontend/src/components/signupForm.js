import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value => value ? undefined : 'Required'
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined

const validLength = (max, min) => value =>
    (min < value && value.length < max) ? `Must be ${min} characters or less than ${max}` : undefined

const validPassword = validLength(40, 6)
const validUsername = validLength(20, 3)

class SignupForm extends React.Component {
    renderInput = ({ input, label, meta: { touched, error, warning } }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {touched && ((error && <span style={{ color: 'red', fontWeight: 'bold' }}>{error}</span>) || (warning && <span style={{ color: 'red', fontWeight: 'bold' }}>{warning}</span>))}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="username" component={this.renderInput} label="Enter Username" validate={[required, validUsername]} />
                <Field name="email" component={this.renderInput} label="Enter Email" validate={[required, email]} />
                <Field name="password" component={this.renderInput} label="Enter Password" validate={[required, validPassword]} />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signupForm'
})(SignupForm)