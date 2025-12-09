import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login(){
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const nav = useNavigate()


function handleSubmit(e){
e.preventDefault()
// Simple mock authentication
if(email === 'admin@edosema.local' && password === 'password'){
localStorage.setItem('token','mock-jwt-token')
nav('/dashboard')
} else {
alert('Invalid credentials — use admin@edosema.local / password')
}
}


return (
<div className="container py-10">
<h2 className="text-2xl font-semibold">Login</h2>
<form onSubmit={handleSubmit} className="mt-6 max-w-md grid gap-4">
<input value={email} onChange={e=>setEmail(e.target.value)} className="p-3 border" placeholder="Email" />
<input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="p-3 border" placeholder="Password" />
<button className="px-4 py-2 bg-green-600 text-white rounded">Login</button>
</form>
</div>
)
}