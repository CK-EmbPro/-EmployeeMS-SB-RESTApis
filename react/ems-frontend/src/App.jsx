import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import ListAllEmployees from './components/ListAllEmployees'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployeeForm from './components/AddEmployeeForm'
const App = () => {
  return (
    <BrowserRouter>
      < Header />
      <Routes>
        <Route path='/' element={<ListAllEmployees/>}></Route>
        <Route path='/employee/get' element={<ListAllEmployees/>}></Route>
        <Route path='/addEmployee' element={<AddEmployeeForm/>}></Route>
        <Route></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App