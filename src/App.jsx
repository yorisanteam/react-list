import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComicList from './comiclist.json';

function App() {
  let Clist = [];
  for(let listno in ComicList){
    let listTitle = ComicList[listno]["フリガナ"];
    Clist.push(listTitle);
    Clist.sort();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='texts'>
          {Clist}
        </div>
      </header>
    </div>
  );
}

export default App;
