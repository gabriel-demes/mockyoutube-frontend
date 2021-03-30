import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Aside.css'

function Aside() {
    return (
        <aside>
            <div><div href="#">Profile</div></div>
            <div><div href="#">Friends</div></div>
            <div><div href="#">Favorites</div></div>
            <div><Link to="/home">Home</Link></div>
            <div><div href="#">Library</div></div>
            <div><div href="#">Videos</div></div>
            <div><div href="#">History</div></div>
        </aside>
    )
}

export default Aside