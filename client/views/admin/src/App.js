import React from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';

var App = () => (
  <div className="App">
    <div className="container">
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <Content />
      </div>
    </div>
  </div>
)

export default App;
