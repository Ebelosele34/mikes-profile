import React from 'react'
export default function Contact(){
return (
<div className="container py-10">
<h2 className="text-2xl font-semibold">Contact</h2>
<form className="mt-6 grid grid-cols-1 gap-4 max-w-xl">
<input className="p-3 border" placeholder="Name" />
<input className="p-3 border" placeholder="Email" />
<textarea className="p-3 border" placeholder="Message" />
<button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
</form>
</div>
)
}