import React from 'react'
import { Field, reduxForm } from 'redux-form'

class Profile extends React.Component {

    renderInput = ({ input, label }) => {
        return (
            <div>
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
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <Field name="fullName" component={this.renderInput} label="Enter Full Name" />
                <Field name="middleName" component={this.renderInput} label="Enter Middle Name" />
                <Field name="lastName" component={this.renderInput} label="Enter Last Name" />
                <Field name="address" component={this.renderInput} label="Enter Address" />
                <Field name="city" component={this.renderInput} label="Enter City" />
                <Field name="province" component={this.renderInput} label="Enter Province" />
                <Field name="email" component={this.renderInput} label="Enter Email" />
                <Field name="phoneNum" component={this.renderInput} label="Enter Phone Number" />
                <button>Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'profileForm'
})(Profile)