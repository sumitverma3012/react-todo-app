import React, { Component } from 'react';
import TodoContainer from "./containers/TodoContainer";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="child">React TODO App</h1>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
