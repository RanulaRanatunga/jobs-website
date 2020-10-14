import React from 'react'
import { Field, reduxForm } from 'redux-form'

class JobsInterestedInForm extends React.Component {

    renderInput = ({ input, label }) => {
        return (
            <div>
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
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='interestedJob-1' component={this.renderInput} label="Enter 1st Job" />
                <Field name='interestedJob-2' component={this.renderInput} label="Enter 2nd Job" />
                <Field name='interestedJob-3' component={this.renderInput} label="Enter 3rd Job" />
                <Field name='interestedJob-4' component={this.renderInput} label="Enter 4th Job" />
                <Field name='interestedJob-5' component={this.renderInput} label="Enter 5th Job" />
                <button>Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'jobsInterestedIn'
})(JobsInterestedInForm)