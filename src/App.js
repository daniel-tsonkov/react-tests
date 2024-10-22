import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="from JSX" />
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
