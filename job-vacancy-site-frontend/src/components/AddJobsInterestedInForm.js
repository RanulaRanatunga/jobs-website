import React from 'react'
import { Field, reduxForm } from 'redux-form'

class JobsInterestedInForm extends React.Component {

    renderInput = ({ input, label }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <div className="five fields">
                    <Field name='interestedJob-1' component={this.renderInput} label="Enter 1st Job" />
                    <Field name='interestedJob-2' component={this.renderInput} label="Enter 2nd Job" />
                    <Field name='interestedJob-3' component={this.renderInput} label="Enter 3rd Job" />
                    <Field name='interestedJob-4' component={this.renderInput} label="Enter 4th Job" />
                    <Field name='interestedJob-5' component={this.renderInput} label="Enter 5th Job" />
                </div>
                <div className="ui center aligned container">
                    <button className="ui button">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'jobsInterestedIn'
})(JobsInterestedInForm)