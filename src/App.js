import './App.css';

//Core imports
import React, { Component } from 'react'


//Import componnets
import Navbar from './components/Navbar';
import Newscard from './components/Newscard';


export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Newscard pageSize={8}/>
      </>
    )
  }
}


