import React from 'react' 
import { Link } from 'react-router-dom'
import '../css/Header.css'
import Search from './Search'

function Header({user, setUser}) {

    
    
    const logout = () =>{
        
        localStorage.removeItem("token");
        setUser(null);
    }

    return (
        <header>
            <Link to="/home/">
                <div id="logo"><a href="index.html">Mocktube</a></div>
            </Link>
            <Search></Search>

            {
            !user ? 
                <div>
                <Link to="/login">
                    <div id="login">Login</div>
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