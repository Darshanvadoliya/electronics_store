import React from 'react'
import Product from './Components/Product'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function AppContent() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='' element={<Product/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default AppContent