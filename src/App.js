import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/header/Navbar';
import PostDisplay from './components/InstaDisplay/PostDisplay';
import PostForm from './components/InstaForm/PostForm';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={PostDisplay} />
              <Route path="/instapost" component={PostForm} /> 
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App
