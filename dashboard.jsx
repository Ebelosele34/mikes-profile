import React from 'react'
export default function Dashboard(){
return (
<div className="container py-10">
<h2 className="text-2xl font-semibold">Dashboard</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
<div className="card p-6">Users</div>
<div className="card p-6">Analytics</div>
<div className="card p-6">Reports</div>
<div className="card p-6">Settings</div>
</div>
</div>
)
}