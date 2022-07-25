import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from './components/Home';
import { Search } from './components/Search';
import { Game } from './components/Game';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className='mb-8'>
        <h1 className='text-5xl font-bold underline font-mono cursor-pointer' onClick={ () => navigate("/") }>
          Game Deals
        </h1>
        <h3 className='font-mono text-xl'>Find the best deal for any game on PC:</h3>
      </div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/search/:game' element={ <Search /> } />
        <Route path='/game/:id' element={ <Game /> } />
      </Routes>
    </div>
  );
}

export default App;
