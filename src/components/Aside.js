import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Aside.css'
import HomeIcon from '@material-ui/icons/Home';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PeopleIcon from '@material-ui/icons/People';
import StarIcon from '@material-ui/icons/Star';
import HistoryIcon from '@material-ui/icons/History';

function Aside({user}) {
    return (
        <aside>
            <div><Link to="/home"><HomeIcon/> <br></br>Home</Link></div>
            <div><Link to={user ? "/new" : "/login"}><VideoCallIcon/> <br></br>Upload Video</Link></div>
            <div><Link to={user ? "/friends" : "/login"}><PeopleIcon/> <br></br>Friends</Link></div>
            <div><Link to={user ?"/favorites" : "/login"}><StarIcon/> <br></br>Favorites</Link></div>
            <div><Link to="/history"><HistoryIcon/> <br></br>History</Link></div>
        </aside>
    )
}

export default Aside