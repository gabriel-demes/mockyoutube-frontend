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
function App() {

  const [videos, setVideos] = useState([])
  const [user, setUser] = useState(null)

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
        });
    }
  }, []);

  return (
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/home">
            <main>
              <Aside />
              <VideoContainer videos={videos} />
            </main>
          </Route>

          <Route path="/video/:id">
            <VideoPage />
          </Route>

          <Route path="/new">
            <NewVidForm/>
          </Route>

          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>

          <Route path="/signup">
            <SignUp setUser={setUser}/>
          </Route>

        </Switch>
      </div>
    
  );
}

export default App;
