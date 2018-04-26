import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> hello - world </h1>
        <div>
          <Header />
        </div>
        <div>
          <Nav />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
