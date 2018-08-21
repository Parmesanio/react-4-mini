import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import routes from './routes';



class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
      <Link to="/what">What</Link>
      <Link to="/who">Who</Link>
      <Link to="/why">Why</Link>
        {routes}
      </div>
      </div>
    );
  }
}

export default App;
