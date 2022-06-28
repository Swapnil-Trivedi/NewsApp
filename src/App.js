import './App.css';

//Core imports
import React, { Component } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


//Import componnets
import Navbar from './components/Navbar';
import Newscard from './components/Newscard';


export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Newscard pageSize={8} category={"general"}/>}/>
        <Route path="/Business" element={<Newscard pageSize={8} category="business"/>}/>
        <Route path="/Ertainment" element={<Newscard pageSize={8} category="ertainment"/>}/>
        <Route path="/General" element={<Newscard pageSize={8} category="general"/>}/>
        <Route path="/Health" element={<Newscard pageSize={8} category="health"/>}/>
        <Route path="/Science" element={<Newscard pageSize={8} category="science"/>}/>
        <Route path="/Sports" element={<Newscard pageSize={8} category="sports"/>}/>
        <Route path="/Technology" element={<Newscard pageSize={8} category="technology"/>}/>

      </Routes>

      </Router>
      </>
    )
  }
}


