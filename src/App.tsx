import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Logo } from "./components/svg/Logo";
import { useCountdown } from "./hooks/useCountdown";
import { ProfilesPage } from "./components/ProfilePage";
import { TestUseSyncExternalStore } from "./components/TestUseSyncExternalStore";
import { TodoList } from "./components/TodoList/TodoList";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  const [count, setCount] = useState(0)
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  // const { counter, stopCounter, reloadCounter } = useCountdown(10, () => {
  //   setNumberQuestion(q => q + 1);
  //   reloadCounter();
  // });

  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <Logo/>
        <ProfilesPage/>
        <TodoList/>
        <div>
          <button onClick={() => setPlaying(p => !p)}>{isPlaying ? "Stop" : "Play"}</button>
        <VideoPlayer src={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"} isPlaying={isPlaying}/>
        </div>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>Hello Vite + React!</p>
        {/*<div>{counter === 0 ? "fini" : counter}</div>*/}
        <TestUseSyncExternalStore/>
        <div>Question {numberQuestion}</div>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
