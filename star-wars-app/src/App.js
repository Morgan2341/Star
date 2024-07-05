import React, { useState } from 'react';
import FilmList from './components/FilmList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Star Wars Filmləri</h1>
      <FilmList />
    </div>
  );
}

export default App;
