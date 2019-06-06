import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContadorContainer from './containers/ContadorContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ContadorContainer} />
        </div>
      </Router>
      
    );
  }
}

export default App;
