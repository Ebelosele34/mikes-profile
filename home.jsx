import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'


export default function Home(){
const hero = useRef(null)
useEffect(()=>{
const el = hero.current
gsap.fromTo(el, { y: 30, opacity: 0 }, { y:0, opacity:1, duration: 1.2, ease: 'power3.out' })
gsap.from('.card', { y: 20, opacity:0, stagger:0.12, duration:0.8 })
},[])


return (
<main className="container py-10">
<section ref={hero} className="text-center py-12">
<h1 className="text-4xl font-bold">Welcome — All-in-One React + CSS Project</h1>
<p className="mt-4">Learn Flexbox, Grid, Animations (GSAP), Dark Mode, Login and Dashboard.</p>
</section>


<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="card p-6">Modern Flexbox</div>
<div className="card p-6">Fully Responsive</div>
<div className="card p-6">CSS Grid Layout</div>
<div className="card p-6">Legacy Float</div>
<div className="card p-6">Animations (GSAP)</div>
<div className="card p-6">EDOSEMA UI</div>
</section>
</main>
)
}