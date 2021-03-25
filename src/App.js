import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import VideoContainer from './components/VideoContainer';

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Aside />
          <VideoContainer />
        </main>
    </div>
  );
}

export default App;
