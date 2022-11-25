import './App.css';
import React from 'react';
// import ComicList from './comiclist.json';
import Home from './components/Home.jsx';
import TurnA from './components/TurnA.jsx';
import TurnKA from './components/TurnKA.jsx';
import TurnSA from './components/TurnSA.jsx';
import TurnTA from './components/TurnTA.jsx';
import TurnNA from './components/TurnNA.jsx';
import TurnHA from './components/TurnHA.jsx';
import TurnMA from './components/TurnMA.jsx';
import TurnYA from './components/TurnYA.jsx';
import TurnRA from './components/TurnRA.jsx';
import TurnWA from './components/TurnWA.jsx';
import Sidebar from './components/Sidebar.jsx';
import Shelf from './components/Shelf';
import Edit from './components/Edit';
import NotFound from './components/NotFound.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className='outside'>
        <div className='sidebar'>
          <Sidebar />
        </div>
      </div>
      <div className='contents'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A" element={<TurnA />} />
            <Route path="/KA" element={<TurnKA />} />
            <Route path="/SA" element={<TurnSA />} />
            <Route path="/TA" element={<TurnTA />} />
            <Route path="/NA" element={<TurnNA />} />
            <Route path="/HA" element={<TurnHA />} />
            <Route path="/MA" element={<TurnMA />} />
            <Route path="/YA" element={<TurnYA />} />
            <Route path="/RA" element={<TurnRA />} />
            <Route path="/WA" element={<TurnWA />} />
            <Route path="/Shelf" element={<Shelf />} />
            <Route path="/Edit/*" element={<Edit />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
