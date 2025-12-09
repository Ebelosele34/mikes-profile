import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Dashboard from './pages/Dashboard'
import EDOSEMA from './pages/EDOSEMA'
import Contact from './pages/Contact'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'


export default function App(){
const location = useLocation()
useEffect(()=>{ window.scrollTo(0,0) }, [location])
return (
<div className="min-h-screen">
<Navbar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/portfolio" element={<Portfolio/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/login" element={<Login/>} />
<Route path="/edosema" element={<EDOSEMA/>} />
<Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
</Routes>
</div>
)
}