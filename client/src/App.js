
import './App.css';
import {useState} from 'react'
import axios from 'axios'
import { Router, Link, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import User from './components/User';
import About from './components/About';
import Data from './components/Data';

function App() {
  
  

  return (
    <div className="App">
    <Header/>


      <Routes>
      <Route path='/' />
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>
      <Route exact path='/data' element={<Data/>}/>
      </Routes>


      

    </div>
  );
}

export default App;
