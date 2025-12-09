import React from 'react'
export default function Portfolio(){
return (
<div className="container py-10">
<h2 className="text-2xl font-semibold">Portfolio</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
<div className="card p-6">Project 1</div>
<div className="card p-6">Project 2</div>
<div className="card p-6">Project 3</div>
</div>
</div>
)
}