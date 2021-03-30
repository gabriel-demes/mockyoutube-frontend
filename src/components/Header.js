import React, { useState } from 'react' 
import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header({user, setUser}) {

    const [searchTerm, setSearchTerm] = useState("")
    
    const logout = () =>{
        
        localStorage.removeItem("token");
        setUser(null);
    }

    return (
        <header>
            <Link to="/home/">
                <div id="logo"><a href="index.html">Mocktube</a></div>
            </Link>
            <form id="searchbar">
                <input type="text" id="search-input" placeholder="search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <input type="submit" id="search-btn" value="🔍"></input>
            </form>

            {!user ? 
                <div>
                <Link to="/login">
                    <div id="login"> Login</div>
                </Link> 
                <Link to="/signup">
                    <div id="signup">Signup</div>
                </Link> 
                </div>: 
                <button id="logout" onClick={logout}>Logout</button>
            }       
        </header>
    )
}

export default Header