import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Admin from './Admin/Admin';
import Client from './Client/Client';
import Login from './Login';
import Signup from './Signup';

import axios from 'axios'
import 'antd/dist/antd.css'

import {Modal,Button} from 'antd'
import history from './history';
import AuthService from "./axios/AuthService"

class App extends Component{

  render(){
    return (
      <div>

          <Router history={history}>

            <Switch>
              <Route path="/login"><Login/></Route>
              <Route path="/Signup" component={Signup}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/client" component={Client}/>
            </Switch>
          
        </Router>
      </div>
    );
  }
}

export default App;
