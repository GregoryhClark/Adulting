import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Reminders from './components/Reminders/Reminders';
import Profile from './components/Profile/Profile';
import Surveys from './components/Surveys/Surveys';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path = '/' component={Login}/>
            <Route exact path = '/dashboard' component={Dashboard}/>
            <Route exact path = '/reminders' component={Reminders}/>
            <Route exact path = '/profile' component={Profile}/>
            <Route exact path = '/surveys' component={Surveys}/>
            
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
