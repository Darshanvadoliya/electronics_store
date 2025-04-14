import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Product from '../Components/Product'

function index() {
  return (
    <div>
        <Router>
            <Routes>
               <Route path='/product' element={<Product/>}/> 
            </Routes>
        </Router>
    </div>
  )
}

export default index