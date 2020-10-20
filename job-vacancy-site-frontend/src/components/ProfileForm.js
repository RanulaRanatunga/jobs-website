import React from 'react'
import { Field, reduxForm } from 'redux-form'

class Profile extends React.Component {

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
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form" >
                <div className="field">
                    <div className="three fields">
                        <div className="field">
                            <Field name="fullName" component={this.renderInput} label="Enter First Name" />
                        </div>
                        <div className="field">
                            <Field name="middleName" component={this.renderInput} label="Enter Middle Name" />
                        </div>
                        <div className="field">
                            <Field name="lastName" component={this.renderInput} label="Enter Last Name" />
                        </div>
                    </div>
                </div>
                <Field name="address" component={this.renderInput} label="Enter Address" />
                <div className="field">
                    <div className="two fields">
                        <div className="field">
                            <Field name="city" component={this.renderInput} label="Enter Country" />
                        </div>
                        <div className="field">
                            <Field name="province" component={this.renderInput} label="Enter Province" />
                        </div>
                    </div>
                </div>
                <Field name="email" component={this.renderInput} label="Enter Email" />
                <Field name="phoneNum" component={this.renderInput} label="Enter Phone Number" />
                <div className="ui center aligned container">
                    <button className="ui primary button" >Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'profileForm'
})(Profile)