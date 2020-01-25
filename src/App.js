import React, { Component } from 'react';
import './App.css';
import MainContent from './components/main_content'
import Navbar from './components/navbar'

class App extends Component {
  render (){
    return (
      <div id="main_body">
        <Navbar></Navbar> 
        <MainContent></MainContent>
      </div>
    );  
  }
  
}

export default App;
