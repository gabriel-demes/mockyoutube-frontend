import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import NewVidForm from './components/NewVidForm';
import VideoContainer from './components/VideoContainer';
import VideoPage from './components/VideoPage'
import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import {Switch, Route} from "react-router-dom"
import SignUp from "./components/SignUp"
import SearchPage from './components/SearchPage';
import History from './components/History';
import Favorites from './components/Favorites';
import Friends from './components/Friends'

function App() {

  const [videos, setVideos] = useState([])
  const [user, setUser] = useState(null)
  const [favorites, setFavorites] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:3000/videos')
    .then(r => r.json())
    .then(videos => setVideos(videos))
  }, [])

  useEffect(()=> {
    const token = localStorage.getItem("token")
    if (token){
      fetch('http://localhost:3000/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((r) => r.json())
        .then((user) => { 
          setUser(user);
          setFavorites(user.favorited.map(video => video.id))
        });
    }
  }, []);

  return (
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/home">
            
              <Aside user={user} />
                <VideoContainer videos={videos} />
            
          </Route>

          <Route path="/video/:id">
            <VideoPage user={user} favorites={favorites} />
          </Route>

          <Route path="/new">
            <NewVidForm/>
          </Route>

          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>

          <Route path="/friends">
            
              <Aside user={user}/>
              <Friends/>
            
          </Route>

          <Route path="/signup">
            <SignUp setUser={setUser}/>
          </Route>

          <Route path="/search/:term">
            
              <Aside user={user}/>
              <SearchPage/>
          
          </Route>
          <Route path="/history">
            
              <Aside user={user}/>
              <History videos={videos}/>
            
          </Route>
          <Route path="/favorites">
            
              <Aside user={user}/>
              <Favorites videos={videos} user={user}/>
            
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;
