import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Introduction from './introduction/Introduction';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Introduction></Introduction>
    </div>
  );
}

export default App;
