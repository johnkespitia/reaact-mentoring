import React , {useState, useEffect} from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Toolbar from './Component/Toolbar'
import Home from './Screens/Home';
import User from './Screens/Users';
import Login from './Screens/Login';

import './App.css';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Toolbar color={"red"} size={{
              width:"100%",
              height:"50px"
            }}/>
        </header>
        <Switch>
          <Route  path="/user/:id">
            <User />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h1>404 - Not Found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
