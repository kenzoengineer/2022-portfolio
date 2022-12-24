import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Introduction from './introduction/Introduction';
import Navbar from './navbar/Navbar';
import Experience from './experience/Experience';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Introduction></Introduction>
      <Experience></Experience>
    </div>
  );
}

export default App;
