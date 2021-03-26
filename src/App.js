import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import VideoContainer from './components/VideoContainer';
import VideoPage from './components/VideoPage'
function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Aside />
          <VideoContainer />
        </main>
        <VideoPage />
    </div>
  );
}

export default App;
