import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";

import About from './About';
import Home from './Home';
import User from './User';
import Data from './Data';
import Login from './LogIn'

const header = () => {
  return (
      <div>
      <Link to='/'></Link>
      <Link to='/about'>about</Link>
      <br/>
      <Link to='/home'>home</Link>
      <br/>
      <Link to='/login'>log In</Link>
      <br/>
      <Link to='/data'>send data</Link>
      <br/>
      <Link to='/user'>user</Link>


      </div>
  )
}

export default header