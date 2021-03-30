import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Aside.css'

function Aside() {
    return (
        <aside>
            <div><Link to="/home">Home</Link></div>
            <div><Link to="/new">Upload a Video</Link></div>
            <div><Link to="#">Friends</Link></div>
            <div><Link to="#">Favorites</Link></div>
            <div><Link to="#">Library</Link></div>
            <div><Link to="#">Videos</Link></div>
            <div><Link to="#">History</Link></div>
        </aside>
    )
}

export default Aside