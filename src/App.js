import './App.css';

//Core imports
import React, { Component } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

//Import componnets
import Navbar from './components/Navbar';
import Newscard from './components/Newscard';


export default class App extends Component {

  state={
    progress:0
  }

  setProgress=(prg)=>{
    this.setState({progress: prg});
  }

  render() {
    return (
      <>
      <Router>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Navbar/>
      <Routes>
        {/* Just need to pass aunique key to all NewsCard element since react think they are all the same and won't remount */}
        <Route path="/" element={<Newscard setProgress={this.setProgress}  key={"general"} pageSize={8} category={"general"}/>}/>
        <Route path="/Business" element={<Newscard setProgress={this.setProgress}  key={"business"} pageSize={8} category="business"/>}/>
        <Route path="/Entertainment" element={<Newscard setProgress={this.setProgress}  key={"entertainment"} pageSize={8} category="entertainment"/>}/>
        <Route path="/Health" element={<Newscard setProgress={this.setProgress}  key={"health"} pageSize={8} category="health"/>}/>
        <Route path="/Science" element={<Newscard setProgress={this.setProgress}  key={"science"} pageSize={8} category="science"/>}/>
        <Route path="/Sports" element={<Newscard setProgress={this.setProgress}  key={"sports"} pageSize={8} category="sports"/>}/>
        <Route path="/Technology" element={<Newscard setProgress={this.setProgress}  key={"technology"} pageSize={8} category="technology"/>}/>

      </Routes>

      </Router>
      </>
    )
  }
}


