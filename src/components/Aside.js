import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Aside.css'
import HomeIcon from '@material-ui/icons/Home';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PeopleIcon from '@material-ui/icons/People';
import StarIcon from '@material-ui/icons/Star';
import HistoryIcon from '@material-ui/icons/History';

function Aside() {
    return (
        <aside>
            <div><Link to="/home"><HomeIcon/> Home</Link></div>
            <div><Link to="/new"><VideoCallIcon/>Upload Video</Link></div>
            <div><Link to="#"><PeopleIcon/>Friends</Link></div>
            <div><Link to="/favorites"><StarIcon/>Favorites</Link></div>
            <div><Link to="/history"><HistoryIcon/>History</Link></div>
        </aside>
    )
}

export default Aside