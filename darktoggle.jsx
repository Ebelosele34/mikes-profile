import React, { useEffect, useState } from 'react'


export default function DarkToggle(){
const [dark, setDark] = useState(()=> localStorage.getItem('theme') === 'dark')
useEffect(()=>{
const html = document.documentElement
if(dark){ html.classList.add('dark'); localStorage.setItem('theme','dark') }
else { html.classList.remove('dark'); localStorage.setItem('theme','light') }
},[dark])
return (
<button onClick={()=>setDark(d => !d)} className="px-3 py-1 border rounded">
{dark ? 'Light' : 'Dark'}
</button>
)
}