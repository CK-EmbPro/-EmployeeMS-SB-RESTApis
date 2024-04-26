import axios from "axios"

const REST_API_BASE_URL = "http://localhost:8080/employee/"


export const getAllEmployees= () => axios.get(REST_API_BASE_URL+"get")
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL+"add", employee)
export const getEmployeeById = (id) => axios.get(REST_API_BASE_URL+`get/${id}`)
export const updateEmployee = (id, employee) => axios.put(REST_API_BASE_URL+`update/${id}`, employee)
export const deleteEmployee = (id) => axios.delete(REST_API_BASE_URL+`delete/${id}`)