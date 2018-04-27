import React, { Component } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Nav from './Nav';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [],
      index : 0
    }
  }

  componentDidMount(){
    fetch('http://127.0.0.1:5000')
    .then(data => data.json())
    .then(users => {
        this.setState({users})
    })
    .catch(error => {
      console.log(error);
    })
  }

  clickNavmenu(i){
    console.log(this.state.users)
  }


  render() {
    return (
      <div className="App">
        <div className="container">

        {/* <ul>
          {this.state.users.map((user,index) => 
            <li key={index}>{user.name}</li>)}
        </ul> */}
          <div className='header'>
            <Header />
          </div>
          <div className='nav'>
            <Nav />
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
