import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [],
      index : 0
    }
  }

  // componentDidMount(){
  //   fetch('http://127.0.0.1:8080')
  //   .then(data => data.json())
  //   .then(users => {
  //       this.setState({users})
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className='header'>
            <Header />
          </div>
          <div className='content'>
            <Content  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
