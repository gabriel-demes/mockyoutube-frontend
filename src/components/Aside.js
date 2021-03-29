import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Aside.css'

function Aside() {
    return (
        <aside>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Friends</a></div>
            <div><a href="#">Favorites</a></div>
            <div><Link to="/home">Home</Link></div>
            <div><a href="#">Library</a></div>
            <div><a href="#">Videos</a></div>
            <div><a href="#">History</a></div>
        </aside>
    )
}

export default Aside