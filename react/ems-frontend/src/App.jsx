import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListAllEmployees from './components/ListAllEmployees'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateEmployee from './components/UpdateEmployee'
import AddEmployee from './components/AddEmployee'
const App = () => {

  return (
    <BrowserRouter>
      < Header />
      <Routes>
        <Route path='/' element={<ListAllEmployees/>}></Route>
        <Route path='/employee/get' element={<ListAllEmployees/>}></Route>
        <Route path='/addEmployee' element={<AddEmployee/>}></Route>
        <Route path='/updateEmployee/:id' element={<UpdateEmployee/>}></Route>
        <Route></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App