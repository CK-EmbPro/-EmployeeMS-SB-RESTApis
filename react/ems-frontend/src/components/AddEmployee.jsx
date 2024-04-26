import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmployee } from '../services/EmployeeService'

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const navigator = useNavigate();

    const validateForm = () => {
        let valid = true
        const errorCopy = {...errors}
        if (firstName.trim()) {
           errorCopy.firstName = ""
        } else {
            errorCopy.firstName = "Firstname is required"
            valid = false
        }

        if (lastName.trim()) {
            errorCopy.lastName = ""
        } else {
            errorCopy.lastName = "Lastname is required"
            valid = false
        }

        if (email.trim()) {
           errorCopy.email = ""
        } else {
            errorCopy.email = "Email address is required"
            valid = false
        }

        setErrors(errorCopy)
        return valid
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
        const employee = { firstName, lastName, email }
            createEmployee(employee)
                .then((response) => {
                    navigator('/employee/get')
                })
        }

    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 mt-4 p-2'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>

                                <label htmlFor="first_name" className='form-label'>Enter employee-firstName</label>
                                <input type="text" id='first_name' className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                {errors.firstName &&(
                                    <div className='invalid-feedback'>{errors.firstName}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="last_name" className='form-label'>Enter employee-lastName</label>
                                <input type="text" id='last_name' className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                {errors.lastName &&(
                                    <div className='invalid-feedback'>{errors.lastName}</div>
                                )}
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="email_id" className='form-label'>Enter employee-email</label>
                                <input type="email" id='email_id' className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                                {errors.email &&(
                                    <div className='invalid-feedback'>{errors.email}</div>
                                )}
                            </div>

                            <button className='btn btn-primary'>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee