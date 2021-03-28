import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
// import Search from './components/Search';
import { Search } from './features/searchFilter/Search'
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
