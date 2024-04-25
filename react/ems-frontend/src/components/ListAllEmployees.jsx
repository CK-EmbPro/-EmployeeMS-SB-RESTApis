import React, { useEffect, useState } from 'react'
import { getAllEmployees } from '../services/EmployeeService'

const ListAllEmployees = () => {
    const [employees, setEmployees] = useState([])

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


    return (
        <div className='container'>
            <h2 className='text-center'>
                List of employees
            </h2>

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