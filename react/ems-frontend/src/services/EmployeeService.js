import axios from "axios"

const REST_API_BASE_URL = "http://localhost:8080/employee/get"
export const getAllEmployees= () => axios.get(REST_API_BASE_URL)
