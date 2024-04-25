import axios from "axios"

const REST_API_BASE_URL = "http://localhost:8080/employee/"


export const getAllEmployees= () => axios.get(REST_API_BASE_URL+"get")
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL+"add", employee)