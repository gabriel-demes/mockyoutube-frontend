import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import NewVidForm from './components/NewVidForm';
import VideoContainer from './components/VideoContainer';
import VideoPage from './components/VideoPage'
import React, { useEffect, useState } from 'react'

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/videos')
    .then(r => r.json())
    .then(videos => setVideos(videos))
  }, [])

  return (
    <div className="App">
      <Header />
        <main>
          <Aside />
          <VideoContainer videos={videos} />
        </main>
        <VideoPage />
        <NewVidForm/>
    </div>
  );
}

export default App;
