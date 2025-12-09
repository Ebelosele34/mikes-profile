import React from 'react'
import { Link } from 'react-router-dom'
import DarkToggle from './DarkToggle'


export default function Navbar(){
return (
<nav className="bg-gray-900 text-white sticky top-0 z-50">
<div className="container flex items-center justify-between">
<div className="flex items-center gap-4 py-4">
<img src="/logo.png" alt="logo" className="w-10 h-10 rounded"/>
<div>
<div className="font-bold">mysafetymyconcern</div>
<div className="text-xs">Engr. Ebelosele M. Aigbokhan</div>
</div>
</div>
<div className="flex items-center gap-6">
<Link to="/" className="hover:underline">Home</Link>
<Link to="/about" className="hover:underline">About</Link>
<Link to="/portfolio" className="hover:underline">Portfolio</Link>
<Link to="/edosema" className="hover:underline">EDOSEMA</Link>
<Link to="/dashboard" className="hover:underline">Dashboard</Link>
<Link to="/contact" className="hover:underline">Contact</Link>
<Link to="/login" className="px-3 py-2 bg-white text-black rounded">Login</Link>
<DarkToggle />
</div>
</div>
</nav>
)
}