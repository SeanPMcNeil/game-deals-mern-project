import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from './components/Home';
import { Search } from './components/Search';
import { Game } from './components/Game';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className='mb-8 mt-4'>
        <h1 className='text-5xl font-bold underline font-mono cursor-pointer' onClick={ () => navigate("/") }>
          Game Deals
        </h1>
        <h3 className='font-mono text-xl'>Find the best deal for any game on PC:</h3>
      </div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/search/:game' element={ <Search /> } />
        <Route path='/game/:game' element={ <Game /> } />
      </Routes>
      <footer className='fixed w-full left-0 bottom-0 p-2 mt-4 shadow flex justify-center bg-slate-800'>
        <ul className='flex flex-wrap'>
          <li>
            <a href="https://github.com/SeanPMcNeil" className='mr-4'>Project by: <span className='underline decoration-double'>Sean McNeil</span></a>
          </li>
          <li>
            <a href="https://rawg.io" className='mr-4'>Game Images: <span className='underline decoration-double'>RAWG</span></a>
          </li>
          <li>
            <a href="https://www.cheapshark.com/">Deal Data: <span className='underline decoration-double'>CheapShark</span></a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
