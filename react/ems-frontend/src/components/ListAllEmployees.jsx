import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllEmployees } from '../services/EmployeeService'

const ListAllEmployees = () => {
    const [employees, setEmployees] = useState([])
    const navigator = useNavigate()

    useEffect(() => {
        const getEmployees = async () => {
            getAllEmployees()
                .then((response) =>
                    setEmployees(response.data)
                )
                .catch((error) => console.error(error))
        }

        getEmployees()
    }, [])

    const handleAddEmployee = () => navigator("/addEmployee")


    return (
        <div className='container'>
            <h2 className='text-center'>
                List of employees
            </h2>

            <button className='btn btn-primary mb-2' onClick={handleAddEmployee}>Add employee</button>

            <table className='table table-stripped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee firstName</th>
                        <th>Employee lastName</th>
                        <th>Employee emaiil</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default ListAllEmployees