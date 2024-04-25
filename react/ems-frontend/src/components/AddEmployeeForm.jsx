import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createEmployee } from '../services/EmployeeService'

const AddEmployeeForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const employee = { firstName, lastName, email }
       
        createEmployee(employee)
        .then((response) => {
            navigator('/employee/get')
        })
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                            
                                <label htmlFor="first_name" className='form-label'>Enter employee-firstName</label>
                                <input type="text" id='first_name' className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="last_name" className='form-label'>Enter employee-lastName</label>
                                <input type="text" id='last_name' className='form-control'  value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="email_id" className='form-label'>Enter employee-email</label>
                                <input type="email" id='email_id' className='form-control'  value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <button className='btn btn-primary'>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeForm